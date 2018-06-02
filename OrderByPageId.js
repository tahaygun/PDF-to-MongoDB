var filename="agt2"
var file = require(`./export/${filename}.json`);
const fs = require("fs");
// sort json by pageId
function orderById(file,filename) {  
    function predicateBy(prop){
        return function(a,b){
            if( a[prop] > b[prop]){
                return 1;
            }else if( a[prop] < b[prop] ){
                return -1;
            }
            return 0;
        }
    }
    fs.writeFile(`./export/${filename}.json`,JSON.stringify(file.pages.sort( predicateBy("pageId"))));

}

orderById(file, filename);



