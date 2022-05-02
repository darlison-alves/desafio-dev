import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Operation } from 'src/entities/operation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NormalizeFileUpload } from 'src/helpers/normalize-file-upload.helper';
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

  async findAll() {
    const [ operations, count ] = await this.operationsRepository.findAndCount({ 
      relations: ["type"]
    })
    console.log('result', count)
    return {
      operations,
      count
    }
  }
  
}
