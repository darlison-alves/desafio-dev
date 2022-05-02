import { Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { PassThrough } from 'stream';
import { AppService } from '../services/app.service';

@Controller('stores')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return {
      message: 'Welcome BackEnd!'
    }
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {

    console.log('file.buffer', file)

    const textBuffer = file.buffer;
    const passThrough = new PassThrough();
    passThrough.end(textBuffer)

    this.appService.processNomarlize(passThrough)
    return {
      message: 'ok'
    }
  }

  @Get('/operations')
  async getOperation(@Query() filter) {
    console.log('filter', filter)
    return this.appService.findAll(filter);
  }

  @Get('/store-owner')
  async getStoreOwner() {
    return this.appService.getOwnersStore()
  }

}
