
const fs = require('fs');
const memberArray = require('./source/src-memeber-id-array');

const fileList = [];
memberArray.forEach((memberName, index) => {
  let template = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${index} : ${memberName}</title>
  </head>
  <body>
    <h1>나는 ${memberName} 아이디를 사용하고 있습니다!</h1>
  </body>
  </html>
  `;
  fileList.push(template);
});

// console.log(fileList);
// console.log(fileList.length);

for(let i = 0; i<fileList.length; i++) {
  fs.writeFile(`./static/${memberArray[i]}.html`, fileList[i], (err) => {
    if(err) {
      console.error("에러발생");
    }
  });
};
