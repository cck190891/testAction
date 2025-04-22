const fs = require('fs');

const now = new Date().toISOString(); // UTC 時間
const content = `執行時間：${now}\n`;

fs.writeFileSync('output.txt', content);
console.log('已寫入：', content);
