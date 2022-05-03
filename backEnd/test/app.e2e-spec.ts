import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { config } from '../ormconfig';
import { AppController } from '../src/controllers/app.controller';
import { AppService } from '../src/services/app.service';
import { Repository } from 'typeorm';
import { Operation } from '../src/entities/operation.entity';

describe('AppController (e2e)', () => {

  it('/ (GET)', () => {
    const repository = new Repository<Operation>()
    const appService = new AppService(repository)
    const appController = new AppController(appService);

    expect(appController.getHello()).toBe("Hello World!")
  });
});
