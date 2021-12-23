const  tree =require('./commands/tree') 
const  help =require('./commands/help') 
const  org =require('./commands/org')

let cmd_array=process.argv.slice(2)
let cmd=cmd_array[0];
let dirPath=cmd_array[1];

switch(cmd){
    case 'organize':org.org(dirPath);
                    break;
    case 'tree':tree.tree(dirPath);
                break;
    case 'help':help.help();
                break;
    case 'exit':break;
    default:console.log("Enter valid Choice");
}
