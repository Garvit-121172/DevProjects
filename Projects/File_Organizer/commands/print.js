var colors = require('colors');

function print(name,indent,lvl,symbol){
    if(lvl==0)
    console.log(colors.red(indent,symbol,name));
    if(lvl==1)
    console.log(colors.magenta(indent,symbol,name));
    if(lvl==2)
    console.log(colors.yellow(indent,symbol,name));
    if(lvl==3)
    console.log(colors.blue(indent,symbol,name));
    if(lvl==4)
    console.log(colors.cyan(indent,symbol,name));
    if(lvl==5)
    console.log(colors.green(indent,symbol,name));
    
}
module.exports={
    print:print
}