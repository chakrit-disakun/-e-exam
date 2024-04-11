"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const leave_schema_1 = require("./schemas/leave.schema");
const mongoose_2 = require("mongoose");
let LeaveService = class LeaveService {
    constructor(LeaveModel) {
        this.LeaveModel = LeaveModel;
    }
    create(createLeaveDto) {
        const createdLeave = new this.LeaveModel(createLeaveDto);
        return createdLeave.save();
    }
    async findAll() {
        return this.LeaveModel.find().exec();
    }
    findOne(id) {
        return `This action returns a #${id} leave`;
    }
    update(id, updateLeaveDto) {
        return this.LeaveModel.findByIdAndUpdate(id, updateLeaveDto, { new: true }).exec();
    }
    async delete(id) {
        try {
            const result = await this.LeaveModel.findByIdAndDelete(id).exec();
            if (!result) {
                throw new common_1.NotFoundException(`Leave with ID ${id} not found`);
            }
            return { message: 'Delete Successful' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('An error occurred during deletion');
        }
    }
};
exports.LeaveService = LeaveService;
exports.LeaveService = LeaveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(leave_schema_1.Leave.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LeaveService);
//# sourceMappingURL=leave.service.js.map