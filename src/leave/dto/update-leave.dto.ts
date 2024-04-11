import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
export enum status {
    รอพิจารณา = 'รอพิจารณา', อนุมัติ = 'อนุมัติ', ไม่อนุมัติ = 'ไม่อนุมัติ'
}

export class UpdateLeaveDto {
    @IsEnum(status)
    status: status;
}
