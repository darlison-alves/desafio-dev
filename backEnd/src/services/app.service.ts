import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { Operation } from '../entities/operation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NormalizeFileUpload } from '../helpers/normalize-file-upload.helper';
import { PassThrough } from 'stream';
import * as readline from 'readline'

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Operation)
    private operationsRepository: Repository<Operation>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async save(data) {
    return await this.operationsRepository.save(data);
  }

  async processNomarlize(passThrough: PassThrough ): Promise<void> {
    const readInterface = readline.createInterface({
      input: passThrough
    })

    readInterface.on('line', (text) => {
      const obje = NormalizeFileUpload.toJSON(text)
      console.log('obje', obje)
      this.save(obje)
    })    
  }

  async findAll(filter: any = {}) {

    const sum = await this.findAllAndSum(filter)

    const [ operations, count ] = await this.operationsRepository.findAndCount({
      where: filter,
      relations: ["type"]
    })
    console.log('result', count)
    return {
      operations,
      count,
      sum
    }
  }

  async findAllAndSum(filter: any = {}) {

    var where = "";

    if(filter.storeOwner) {
      where = ` WHERE "storeOwner" = '${filter.storeOwner}'`;
    }

    const [result] = await this.operationsRepository.query('SELECT SUM(amount) as total FROM operation' + where)

    return {
      total: result.total || 0
    }

  }

  async getOwnersStore() {
    return getRepository(Operation).createQueryBuilder("opers")
    .select(["opers.storeOwner"])
    .distinctOn(["opers.storeOwner"])
    .orderBy({"opers.storeOwner": "ASC"}).getMany()
  }
  
}
