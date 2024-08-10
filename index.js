const express = require('express');
const app = express();
const port = 3000; // กำหนดพอร์ตเป็นหมายเลขที่ถูกต้อง

// Route หลักที่ root
app.get('/', (req, res) => {
  res.send('Hello World!');
});




// เริ่มต้นเซิร์ฟเวอร์โดยฟังที่ IP Address และพอร์ตที่กำหนด
app.listen(port, '0.0.0.0', () => { // '0.0.0.0' หมายถึงฟังทุก interface รวมถึง external IP
  console.log(`Server is running on http://localhost:${port}`);
});
