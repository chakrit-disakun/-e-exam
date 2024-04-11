import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaveService } from './leave.service';
import { Leave, LeaveSchema } from './schemas/leave.schema';
import { LeaveController } from './leave.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Leave.name, schema: LeaveSchema }]),
  ],
  controllers: [LeaveController],
  providers: [LeaveService],
})
export class LeaveModule {}
