const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('pdfs/MS_Resume_.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error(error);
});
