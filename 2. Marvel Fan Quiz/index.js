var readlinesync = require('readline-sync');

//input
console.log("Are you a Marvel Fan??")
var play = readlinesync.question("Do You Want to play the Marvel fan quiz? (yes/no) :");
var score = 0;

// questions
var questions = [
  
  {
    "question" : "How many Infinity Stones are there? (Numerical)",
    "answer" : "6"
  },
  {
    "question" : "Captain America’s shield and Bucky’s arm are made of what?",
    "answer" : "Vibranium"
  },
  {
    "question" : "Who was responsible for King T’Chaka’s death?",
    "answer" : "Zemo"
  },
  {
    "question" : " Wanda and her brother Pietro are from where?",
    "answer" : "Sokovia"
  },
  {
    "question" : "On what planet was the Soul Stone in Infinity War?",
    "answer" : "Vormir"
  },
  {
    "question" : "Black Panther is set in which fictional country?",
    "answer" : "Wakanda"
  },
  {
    "question" : "Hawkeye has how many children? (numerical)",
    "answer" : "3"
  },
  {
    "question" : "What is Tony Stark’s daughter’s name?",
    "answer" : "Morgan"
  },
  {
    "question" : "Who is the Winter Soldier?",
    "answer" : "Bucky"
  },
  {
    "question" : "Who did Captain America give his shield to in Endgame?",
    "answer" : "Sam"
  }
];

// Function call
if(play.toLowerCase()==="yes"){
  for(var i=0 ; i < questions.length ; i++){
    var j = i+1;
    var answer = readlinesync.question("Question "+j+". "+questions[i].question+" :").toLowerCase();
    quiz(questions[i].question,questions[i].answer);
  }
  console.log ("Final Score is "+score);
}
else{
  console.log("OK Bye!");
}


// Function

function quiz(question,rightAnswer){
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

