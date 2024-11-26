import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Please enter a URL to generate a QR code:',
    },
];

inquirer.prompt(questions).then(answers => {
    const url = answers.url;

    // Remove dots from the URL for name
    const cleanedUrl = url.replace(/\./g, '_');

    // code to generate QR code and save to file
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(`${cleanedUrl}.png`));
    
    // to write the user-entered URL to URL.txt
    fs.appendFile('URL.txt', `${url}\n`, (err) => {
        if (err) throw err;
        console.log('URL saved to URL.txt');
    });
});

