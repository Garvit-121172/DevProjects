const fs=require('fs');
const path=require('path');

let categories = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex','pptx','xlsx'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images:['jpg','jpeg','bmp','png']
}
function org(dirPath){
    console.log(dirPath);
       if(dirPath==undefined){
           console.log("Enter a dirPath");
           return ;
       }
       if(fs.existsSync(dirPath)){
           let destPath=path.join(dirPath,'sorted_folder');
           if(fs.existsSync(destPath)==false){
               fs.mkdirSync(destPath);
           }
           else{
               console.log("Folder not created as already there");
           }
           orgHelper(dirPath,destPath);
       }
       else{
           console.log("Enter a Valid Path");
           return;
       }
}



function orgHelper(srcPath,destPath){
    let x=fs.readdirSync(srcPath);
    for(let file in x){
        let filePath=path.join(srcPath,x[file]);
        if(fs.lstatSync(filePath).isFile()){
            let category=getCategory(x[file]);
            cutPasteFiles(filePath,destPath,category);
        }
    }
}
function cutPasteFiles(srcFilePath,destPath,category){
    let destCategoryPath=path.join(destPath,category);
    if(fs.existsSync(destCategoryPath)==false){
        fs.mkdirSync(destCategoryPath);
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(destCategoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);

} 
function getCategory(filename){
    let ext= path.extname(filename).slice(1);
    for(let catType in categories){
       typArr=categories[catType]
       for(let cat in typArr){
           let extn=typArr[cat]
           if(extn==ext){
                return catType;
            }
        }
    }
    return 'others'
}

module.exports={
    org:org
}