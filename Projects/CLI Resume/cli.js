const cp= require('child_process');
const fs= require('fs');
const inquirer = require('inquirer');


function toAndFro(){
    inquirer
  .prompt([
  {
     type:'list',
     name:'Move' ,
     choices:['Back','Exit']
  }
  ])
  .then((ch) => {
    if(ch.Move=='Back'){
        showChoices();
    }
    else if(ch.move=='Exit'){
        return;
    }
   })
}

showChoices();
 function showChoices(){
    inquirer
    .prompt([
        {
            type:'list',
            name:'Choice',
            choices:['About Me','Skills','Projects','Achievements']
        }
    ])
    .then((choice) => {
        if(choice.Choice=='About Me'){
            console.log("I love keeping it simple and clear. ");
        }
        else if(choice.Choice=='Skills'){
            console.log(`Itna kuch to aata ni h`);
        }
        else if(choice.Choice=='Projects'){
           cp.execSync('start chrome https://github.com/Garvit-121172')
        }
        else if(choice.Choice=='Achievements'){
            console.log(`Aata ni h na kuch isliye ye section khali h`);
        }
        toAndFro();
    })
 }