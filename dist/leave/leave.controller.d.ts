import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
export declare class LeaveController {
    private readonly leaveService;
    constructor(leaveService: LeaveService);
    create(createLeaveDto: CreateLeaveDto): Promise<import("./schemas/leave.schema").Leave>;
    findAll(): Promise<import("./schemas/leave.schema").Leave[]>;
    findOne(id: string): string;
    update(id: string, updateLeaveDto: UpdateLeaveDto): Promise<import("./schemas/leave.schema").Leave>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
