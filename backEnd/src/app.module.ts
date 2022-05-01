import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'ormconfig';
import { AppController } from './controllers/app.controller';
import { Operation } from './entities/operation.entity';
import { AppService } from './services/app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Operation])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
