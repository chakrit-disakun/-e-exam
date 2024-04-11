import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaveDocument = Leave & Document;

@Schema()
export class Leave {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop()
    affiliationOrPosition: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true, enum: ['ลาป่วย', 'ลากิจ', 'พักร้อน', 'อื่นๆ'], default: 'อื่นๆ' })
    leaveType: string;

    @Prop({ required: true })
    reason: string;

    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: Date;

    @Prop({ default: Date.now })
    recordedDateTime: Date;

    @Prop({ default: 'รอพิจารณา', enum: ['รอพิจารณา', 'อนุมัติ', 'ไม่อนุมัติ'] })
    status: string;
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);
