export declare enum LeaveType {
    ลาป่วย = "\u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22",
    ลากิจ = "\u0E25\u0E32\u0E01\u0E34\u0E08",
    พักร้อน = "\u0E1E\u0E31\u0E01\u0E23\u0E49\u0E2D\u0E19",
    อื่นๆ = "\u0E2D\u0E37\u0E48\u0E19\u0E46"
}
export declare class CreateLeaveDto {
    firstName: string;
    lastName: string;
    affiliationOrPosition: string;
    email: string;
    phoneNumber: string;
    leaveType: LeaveType;
    reason: string;
    startDate: Date;
    endDate: Date;
}
