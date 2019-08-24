//การอ้างถึง module ใน PJ เราเอง
const app = require('./app') //กรณีอยู่ใน level เดียวกัน (เหมือนการอ้างไฟล์ใน directory)
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //การstart server เรียกใช้ web ให้ทำงาน , function show on board
