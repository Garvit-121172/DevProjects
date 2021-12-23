const fs = require('fs');
const path = require('path');
const print = require("./print")
function tree(dirPath){
    if(dirPath==undefined){
        console.log("Enter a Path to Show tree");
        return;
    }
    if(fs.existsSync(dirPath)){
        treeHelper(dirPath," ",0);
    }
    else{
        console.log('Enter valid path');
        return ;
    }
}
function treeHelper(dirPath,indent,lvl){
 if(fs.lstatSync(dirPath).isFile()){
     let fileName=path.basename(dirPath);
     print.print(fileName,indent,lvl,"├──");
    
 }
 else{
     let folderName=path.basename(dirPath);
     print.print(folderName,indent,lvl,"└──");
     let subItems=fs.readdirSync(dirPath);
     for(let i in subItems ){
        let subItemPath=path.join(dirPath,subItems[i]); 
        treeHelper(subItemPath,indent+"\t",(lvl+1)%6);
     }
 }
}

module.exports={
    tree:tree
} ;

