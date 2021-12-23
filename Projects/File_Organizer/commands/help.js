function help(){
    console.log(`\nWelcome to the help menu\n
1.Organize Function helps you to organize a folder based on category of file.Its syntax is node file_name.js organize path_of_folder
\n2.Tree Commands helps you to show the hierarchal structure of your directory.Its syntax is node file_name.js tree path_pf the_folder
\n3.Help is for providing you help with the working of the File System Organizer.It syntx is node file help\n`);    
}
module.exports={
    help:help
}