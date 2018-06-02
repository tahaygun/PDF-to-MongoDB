var mongoose =require('mongoose');
mongoose.connect("mongodb://localhost/hebooks2");
const Book = require("./models/Book");
const Section = require("./models/Section");
var jsonbook = require('./kt6-Ready.json');

for (let i = 0; i < jsonbook.length; i++) {   
    var section={
        title:jsonbook[i].title,
        content:jsonbook[i].text,
        book:"5b0005c2baf1e2a9cc67727b",
    }
    var result= new Section(section);
    result.save().then(section => {
    console.log('Added:'+i);
})
.catch(err => {
    console.log(err)
});
}