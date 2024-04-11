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
exports.UpdateLeaveDto = exports.status = void 0;
const class_validator_1 = require("class-validator");
var status;
(function (status) {
    status["\u0E23\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32"] = "\u0E23\u0E2D\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32";
    status["\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34"] = "\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34";
    status["\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34"] = "\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34";
})(status || (exports.status = status = {}));
class UpdateLeaveDto {
}
exports.UpdateLeaveDto = UpdateLeaveDto;
__decorate([
    (0, class_validator_1.IsEnum)(status),
    __metadata("design:type", String)
], UpdateLeaveDto.prototype, "status", void 0);
//# sourceMappingURL=update-leave.dto.js.map