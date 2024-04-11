import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaveModule } from './leave/leave.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27018'), LeaveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
