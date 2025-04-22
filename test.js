// test.js
const fs = require('fs');

const now = new Date().toISOString(); // ISO 格式時間：2025-04-22T10:30:00.000Z
const output = `執行時間：${now}\n`;

fs.writeFileSync('output.txt', output);
console.log('已寫入 output.txt:', output);
