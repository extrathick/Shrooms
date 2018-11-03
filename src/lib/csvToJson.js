// this is also node.js code. I don't think it'll work in the browser, so don't call it please!

// let csvToJson = require('convert-csv-to-json');
const fs = require('fs');

let fileInputName = './data/mushrooms.csv'; 
let fileOutputName = './data/mushrooms.json';

fs.open(fileInputName, 'r', (err, fd) => {
    if (err) throw err;
    // idk if this needs to be this big lol
    var buffer = Buffer.alloc(999999);

    // read its contents into buffer and send to data
    fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
        var data = buffer.toString("utf8", 0, buffer.length);
        parse(data);
    });
    // close the file
    fs.close(fd, (err) => {
        if (err) throw err;
    });
});

// this parses and writes out the data to mushrooms.json
// this writes it in a header array, then a data array. The addition of { and , } etc makes this file much larger.
// we might want to just use csv's, but this seems like it'll be easier for us in the long run. 
function parse(rawdata){
    let data = [];
    let header = [];

    let lines = rawdata.split('\n');

    // the addition of one extra line means that we can ignore the extra line and that fixes the weird '\u000' issue.
    header = lines[0].trim().split(',');
    for(let i = 1; i < lines.length - 1; i++){
        data.push(lines[i].trim().split(','));
    }
    // our final assembled json object
    let json = {
        header: header,
        data: data
    };
    // write out the file
    fs.writeFile(fileOutputName, JSON.stringify(json, null, 4), function (err){
        if(err){
            throw err;
        }
        else{
            console.log(`Writing out json to ${fileOutputName}.`)
        }
    });
}

