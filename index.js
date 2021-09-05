var read=require('readline-sync');
const chalk=require('chalk');
var score=0;
var score1=0;
var primaryQuestion=read.question(chalk.red("What is your name?  "));
console.log(chalk.red("Welcome to the quiz on your life")+chalk.red.bgWhite(" "+primaryQuestion+". ")+chalk.red("Let's start! and please answer using option's index!"));
var informationAboutLife1=[{
  question:"What is the meaning of life ? a: Existence b: Suffering  ",
  answer:"a"
},
{
  question:"What's best to do in hard times? a: Struggle b: Enjoy   ",
  answer:"a"

},{
  question:"What's best to do in good times? a: Struggle b: Enjoy   ",
  answer:"a"
}];
var informationAboutLife2=[{
  question:"How should we choose to struggle? a: With Smile b: Crying for what we can't handle  ",
  answer:"a"
},
{
  question:"Which is the biggest religion on earth? a: Hinduism b: Christianity c: Humanity  ",
  answer:"b"
}];


function letsGetIntoIt(informationAboutLife)
{
for(var i=0;i<informationAboutLife.length;i++){
  var letsgo=informationAboutLife[i];
var userans=read.question(letsgo.question);
if(userans==letsgo.answer){
console.log(chalk.red("That's absolutely right"));
score+=1;
console.log(chalk.red("your current score is")+chalk.rgb(0,255,255).bgBlackBright(" "+score));
}
else{
console.log(chalk.blue("You are still a kid! :( "));}  
console.log("----------------------");
}}

letsGetIntoIt(informationAboutLife1);


if(score==3){
  console.log(chalk.red("What!!!!!") +chalk.redBright("A perfect Score! You know something about life. But don't be so philosophcal! Let's proceed further!"));
  console.log("********************************");
  console.log(chalk.redBright("This is Life Test 2! Think and Answer!"));
  letsGetIntoIt(informationAboutLife2);
  if(score==4){
  var prompt=read.question(chalk.red("Don't be too philosophical,")+chalk.redBright(" think practically! Want to try it again? Type y for yes  "));
  if(prompt=="y"){console.log("************************");
  score=3;
  letsGetIntoIt(informationAboutLife2);
            }
  }
  if(score==5)
  console.log(chalk.cyanBright("You didn't fall into the trap! and cleared the quiz!! Hurray"));
}



