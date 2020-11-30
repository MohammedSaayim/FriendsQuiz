var readlineSync=require('readline-sync');
var chalk=require("chalk");
var userAnswer;

var userName= readlineSync.question('May I have your name?');

console.log(chalk.blue('Welcome '+userName+' to  HOW WELL DO YOU KNOW F.R.I.E.N.D.S'));
questionOne= {
question: "1.For a brief amount of time, Joey and Chandler weren't roommates. Who replaces Joey as Chandler's new roommate? \n 1.Eddie \n 2.Drunk Bobby ",
answer: "1"
}

questionTwo={
question: "2. What did Ross name his white-headed pet capuchin monkey? \n 1.Marcila \n 2. Marcel",
answer: "2"
}

questionThree={
  question: "3. Rachel-Monica are up against Chandler-Joey in a show-style game contest. The competition is getting tough the girls have bet their apartment while the boys vow to_____ if they lose: \n 1. Teach them how to play poker \n 2. Give away the roaster and the duck\n",
  answer: "2"
}

questionFour={
  question: "4. We all know that Joey's soulmate was his recliner. Do you happen to remember his precious chair's name?\n 1.Rosette \n 2.Rosita ",
  answer: "2"
}

questionFive={
  question: "5. What is the name of ross and rachel's daughter \n 1. Emmette \n 2. Emma",
  answer: "2"
}

var score=0;
var highScore={
  Prathmesh: 5,
  Rehan: 4
  }
function play(question, answer){
userAnswer=readlineSync.question(question );
if(userAnswer===answer)
{
  console.log(chalk.green('Right answer'));
  score++;
  
}
else
console.log(chalk.red('wrong answer')+', the right answer is:'+chalk.green(answer));
console.log('Your current score is '+score);

}

play(questionOne.question,questionOne.answer);

play(questionTwo.question,questionTwo.answer);

play(questionThree.question,questionThree.answer);

play(questionFour.question,questionFour.answer);

play(questionFive.question,questionFive.answer);

console.log('----------');
console.log(chalk.bgCyan('Yay! You scored '+score+'/5'));
console.log('----------');

var highScoreString=JSON.stringify(highScore);
console.log(chalk.bgYellow('Check out the high scores: \n'+highScoreString));

  // function checkHighScore(){
  // for(var i=0;i<highScore.length;i++)
  // {
  // if(score>=object.values(highScore))
  // console.log('congrats!'+userName+' you just beat the highscore');
  // }
  // }
//checkHighScore();
console.log('If you have beaten the high score, send me a screenshot and your name will be put on the highscore board');
