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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveSchema = exports.Leave = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Leave = class Leave {
};
exports.Leave = Leave;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Leave.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Leave.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leave.prototype, "affiliationOrPosition", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Leave.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Leave.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['ลาป่วย', 'ลากิจ', 'พักร้อน', 'อื่นๆ'], default: 'อื่นๆ' }),
    __metadata("design:type", String)
], Leave.prototype, "leaveType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Leave.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Leave.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Leave.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Leave.prototype, "recordedDateTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'รอพิจารณา', enum: ['รอพิจารณา', 'อนุมัติ', 'ไม่อนุมัติ'] }),
    __metadata("design:type", String)
], Leave.prototype, "status", void 0);
exports.Leave = Leave = __decorate([
    (0, mongoose_1.Schema)()
], Leave);
exports.LeaveSchema = mongoose_1.SchemaFactory.createForClass(Leave);
//# sourceMappingURL=leave.schema.js.map