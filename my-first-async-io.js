var fs = require('fs');
const contenu=fs.readFile(process.argv[2],(err,contenu)=>
{
    if(err){
        console.log(err)
    }
    else {
        var lines = contenu.toString().split('\n').length - 1;

console.log(lines);
    }
}
)
 