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
exports.CreateLeaveDto = exports.LeaveType = void 0;
const class_validator_1 = require("class-validator");
var LeaveType;
(function (LeaveType) {
    LeaveType["\u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22"] = "\u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22";
    LeaveType["\u0E25\u0E32\u0E01\u0E34\u0E08"] = "\u0E25\u0E32\u0E01\u0E34\u0E08";
    LeaveType["\u0E1E\u0E31\u0E01\u0E23\u0E49\u0E2D\u0E19"] = "\u0E1E\u0E31\u0E01\u0E23\u0E49\u0E2D\u0E19";
    LeaveType["\u0E2D\u0E37\u0E48\u0E19\u0E46"] = "\u0E2D\u0E37\u0E48\u0E19\u0E46";
})(LeaveType || (exports.LeaveType = LeaveType = {}));
class CreateLeaveDto {
}
exports.CreateLeaveDto = CreateLeaveDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "affiliationOrPosition", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(LeaveType),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "leaveType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateLeaveDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateLeaveDto.prototype, "endDate", void 0);
//# sourceMappingURL=create-leave.dto.js.map