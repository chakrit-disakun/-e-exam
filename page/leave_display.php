<?php
// เรียกใช้งาน API
$url = 'http://localhost:3000/leave';
$response = file_get_contents($url);
$data = json_decode($response, true);

// ตรวจสอบว่ามีข้อมูลหรือไม่
if ($data && is_array($data)) {
    // วนลูปและแสดงผลข้อมูล
    foreach ($data as $leave) {
        echo "ชื่อ: " . $leave['firstName'] . " " . $leave['lastName'] . "<br>";
        echo "ตำแหน่งหรือสังกัด: " . $leave['affiliationOrPosition'] . "<br>";
        echo "อีเมล: " . $leave['email'] . "<br>";
        echo "หมายเลขโทรศัพท์: " . $leave['phoneNumber'] . "<br>";
        echo "ประเภทการลา: " . $leave['leaveType'] . "<br>";
        echo "เหตุผล: " . $leave['reason'] . "<br>";
        echo "วันที่เริ่มต้น: " . $leave['startDate'] . "<br>";
        echo "วันที่สิ้นสุด: " . $leave['endDate'] . "<br>";
        echo "วันที่บันทึกข้อมูล: " . $leave['recordedDateTime'] . "<br>";
        echo "สถานะ: " . $leave['status'] . "<br>";
        echo "<hr>";
    }
} else {
    echo "ไม่สามารถเข้าถึงข้อมูลได้";
}
?>
