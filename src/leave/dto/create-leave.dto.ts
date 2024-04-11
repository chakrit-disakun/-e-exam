import { IsNotEmpty, IsEnum, IsDate, IsOptional } from 'class-validator';

export enum LeaveType {
  ลาป่วย = 'ลาป่วย',
  ลากิจ = 'ลากิจ',
  พักร้อน = 'พักร้อน',
  อื่นๆ = 'อื่นๆ',
}

export class CreateLeaveDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  affiliationOrPosition: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  @IsEnum(LeaveType)
  leaveType: LeaveType;

  @IsNotEmpty()
  reason: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;
}
