// test.js
console.log('Hello, world!');

const greetPerson = (name) => {
  console.log(`Hello, ${name}!`);
};

// 使用預設的名稱
greetPerson('World');

// 你也可以傳入自訂名稱來測試
const userName = process.argv[2] || 'Guest';
greetPerson(userName);
