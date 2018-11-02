// It's worth mentioning this is node code. I could figure out each field value by hand but that seemed annoying so here we are.

const fs = require('fs');

console.log(process.cwd());
// the node docs say you can do relative files buuuut???

// this opens our file and reads the data out to buffer(data)
fs.open(`${process.cwd()}/src/lib/rawkaggle`, 'r', (err, fd) => {
    if (err) throw err;
    // console.log(fd);
    var buffer = Buffer.alloc(1024);

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
    console.log(data);
}