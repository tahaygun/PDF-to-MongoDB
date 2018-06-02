let fs = require('fs');
var filename='agt2'
var pdfParser = require('./src/pdf2json/pdf2json');

var PDF_PATH = `./${filename}.pdf`;

pdfParser.pdf2json(PDF_PATH, function (error, pdf) {
    if(error != null){
        console.log(error);
    }else{
        fs.writeFileSync(`./export/${filename}.json`, JSON.stringify(pdf));
    }
}); 