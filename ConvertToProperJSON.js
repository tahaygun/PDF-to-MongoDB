var fs = require("fs");
var filename = "agt2";

var sorted = require(`./export/${filename}.json`);
var reg = /(\s{2,})/g;
const trimSpaces = param =>
  new Promise((resolve, reject) => {
    var res = param.replace(reg, " ");
    resolve(res);
  });

// fs.writeFileSync('/lastversion.json', sorted.)
var book = [];
var section = { title: "", text: "" };
for (let index = 0; index < sorted.length; index++) {
  for (let y = 0; y < sorted[index].texts.length; y++) {
    //firts check fontName of title, whenever title comes, we add it first with "---" to find and manupilate later easily.
    if (sorted[index].texts[y].fontSize === 21.011116) {
      if (!((sorted[index].texts[y - 1]
          ? sorted[index].texts[y - 1].fontSize
          : 24.763102) === 21.011116 &&
        (sorted[index].texts[y + 1]
          ? sorted[index].texts[y + 1].fontSize
          : 24.763102 === 21.011116)
      )) {
        book.push(section);
        section = { title: "", text: "" };
        section.title = sorted[index].texts[y].text;
      } else {
        if (
          sorted[index].texts[y + 1] &&
          sorted[index].texts[y + 1].fontSize === 21.011116
        ) {
          section.title =section.title + sorted[index].texts[y].text+' '; //
        } else {
          section.title = section.title + sorted[index].texts[y].text+' ';
        }
     }
    } else if (sorted[index].texts[y].fontName === "g_d0_f6") {
      section.text += sorted[index].texts[y].text;
    } else {
        section.text += sorted[index].texts[y].text + " ";
    }
  }
}
// console.log((book[12].slice(0,book[12].indexOf('-end')+4)).slice(0,book[12].indexOf('-end')));
// console.log(book[12].slice(book[12].indexOf('-end')+4,book[12].length));

//
fs.writeFileSync(
  `./export/${filename}-Ready.json`,
  JSON.stringify(
    book.map(part => {
      part.text = part.text.replace(reg, " ");
      part.title = part.title.replace(reg, " ");
      return part;
    })
  )
);

//---------------------------------------------------------------------------------------------------------------------------------
// var fs = require('fs');
// var filename="ff5sorted"
// var sorted = require(`./${filename}.json`);

// // fs.writeFileSync('/lastversion.json', sorted.)
// var book = [];
// var section = '';
// var reg =/(\s{2,})/g
// for (let index = 0; index < sorted.length; index++) {
// // for (let index = 0; index <10; index++) {
//   for (let y = 0; y < sorted[index].texts.length; y++) {

//     //firts check fontName of title, whenever title comes, we add it first with "---" to find and manupilate later easily.
//     if (sorted[index].texts[y].fontName === "g_d0_f3") {
//         if ((sorted[index].texts[y-1]&& sorted[index].texts[y-1].fontName !== "g_d0_f3")&& (sorted[index].texts[y+1]&& sorted[index].texts[y+1].fontName !== "g_d0_f3")) {
//             book.push(section);
//             section =sorted[index].texts[y].text+"-end";
//         }else{
//             if(sorted[index].texts[y+1]&& sorted[index].texts[y+1].fontName === "g_d0_f3"){
//                 section =sorted[index].texts[y].text; //
//             }else{
//                 section =section+ sorted[index].texts[y].text+"-end";
//             }
//         }

//     } else if(sorted[index].texts[y].fontName === "g_d0_f5") {
//         section += sorted[index].texts[y].text;
//     }else{
//         section += sorted[index].texts[y].text+' ';
//     }
//   }
// }
// // console.log((book[12].slice(0,book[12].indexOf('-end')+4)).slice(0,book[12].indexOf('-end')));
// // console.log(book[12].slice(book[12].indexOf('-end')+4,book[12].length));

// //
// fs.writeFileSync(`./${filename}ready.json`, JSON.stringify(book.map(section=>section.replace(reg,' '))));
