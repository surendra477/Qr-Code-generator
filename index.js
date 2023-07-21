import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"pass the url: ",name:"URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers.URL);
      var qr_svg = qr.image(answers.URL);
      qr_svg.pipe(fs.createWriteStream('qr.png'));
      //console.log(qr_svg);
      //var svg_string = qr.imageSync(answers.URL, { type: 'png' });
      //console.log(svg_string);
    //   var qr_svg = qr.image('I love QR!', { type: 'svg' });
    //   qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
    //   var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
    //   fs.writeFile('message.svg', svg_string, (err) => {
    //       if (err) throw err;
    //       console.log('The file has been saved!');
    //   }); 

      //var qr_svg = qr.image(answers.URL, { type: 'png' });
      var svg_string = qr.imageSync(answers.URL, { type: 'png' });

    //   fs.writeFile('message.png', qr_svg, (err) => {
    //       if (err) throw err;
    //       console.log('The file has been saved!');
    //   }); 
      
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });