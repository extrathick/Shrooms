// It's worth mentioning this is node code. I could figure out each field value by hand but that seemed annoying so here we are.

const fs = require('fs');

const outputfile =  'out.json';

console.log(process.cwd());
// the node docs say you can do relative files buuuut???

// this opens our file and reads the data out to buffer(data)
fs.open(`${process.cwd()}/src/lib/rawkaggle`, 'r', (err, fd) => {
    if (err) throw err;
    // console.log(fd);
    var buffer = Buffer.alloc(4096);

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

// this reads our data, and will hopefully turn it into something nice.
function parse(data) {
    // console.log(data);
    let readableData = data.split('\n');
    jsonArray = [];
    // look at every line
    for(let line of readableData){
        split = line.split(': ');
        identifier = split[0];
        values = split[1];
        // console.log(`id=== ${identifier} vals=== ${values}`);
        valueSplit = values.split(',');
        valueLookupArray = [];
        // then look at all the values
        for(let keyValue of valueSplit){
            let pair = keyValue.split('=');
            let lookup = {
                key: pair[1].substring(0, 1),
                value: pair[0]
            };
            // console.log(lookup);
            valueLookupArray.push(lookup);
        }
        // put it all into an array
        jsonArray.push({
            key: identifier,
            value: valueLookupArray
        });
    }
    // then put it into an object
    let object = {jsonArray};
    // console.log(object);
    // then write it out!
    fs.writeFile(outputfile, JSON.stringify(object, null, 4), function (err){
        if(err){
            throw err;
        }
        else{
            console.log(`Writing out json to ${outputfile}.`)
        }
    });

}