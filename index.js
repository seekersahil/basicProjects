var readlinesync = require('readline-sync');

//input
console.log("Let's see how much you know me!!")
var play = readlinesync.question("Do You Want to Play? (yes/no) :");
var score = 0;

// questions
var questions = [
  
  {
    "question" : "What is my surname?",
    "answer" : "Gupta"
  },
  {
    "question" : "What is my age?",
    "answer" : "25"
  },
  {
    "question" : "Which city was I born in?",
    "answer" : "Karnal"
  },
  {
    "question" : "Which city did I complete school from?",
    "answer" : "Kaithal"
  },
  {
    "question" : "Which city did I complete graduation from?",
    "answer" : "Patiala"
  },
  {
    "question" : "What is my social media username?",
    "answer" : "seekersahil"
  }
];

// Function call
if(play==="yes"){
  for(var i=0 ; i < questions.length ; i++){
    quiz(questions[i].question,questions[i].answer);
  }
  console.log ("Final Score is "+score);
}
else{
  console.log("OK Bye!");
}


// Function

function quiz(question,rightAnswer){
  var answer = readlinesync.question(question+" :").toLowerCase();
  if(answer === rightAnswer.toLowerCase()){
    //output
    console.log("Right Answer");
    score++;
  }  
  else{
    //output
    console.log("Wrong Answer. Right answer is "+rightAnswer);
  }
  console.log("Your Score is: "+score);
}

