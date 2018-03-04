
$(document).ready(function() {


//Store Questions Answers and the answers value ________________
var questions = 
[
    {question0: [
        {answer01: false},
        {answer02: false},
        {answer03: true},
        {answer04: false},
    ]},
    {question1: {
        answer11: true,
        answer12: false,
        answer13: false,
        answer14: false
    }},
    {question2: {
        answer21: true,
        answer22: false,
        answer23: false,
        answer24: false
    }},
    {question3: {
        answer31: true,
        answer32: false,
        answer33: false,
        answer34: false
    }}
];
//////Variables////
timer= 5;
//Generate a random number 
let randomNumber = Math.floor(Math.random() * questions.length);
//Generate a random questions 


     ///////////////////Splicer FUnction///////
     function splicer(){ 
        let randomNumber = Math.floor(Math.random() * questions.length);
        let randomQuestion = questions[randomNumber];
        var displayedQuestion = Object.keys(randomQuestion);
        
        $("#question").text(displayedQuestion);
        // console.log(randomQuestion);
        questions.splice(randomNumber,1);     

        console.log(questions.length + " Question is lef in the array");

    }
   
    
///////////////End of the splicer Function/////
/////////////////Logic of PracticeArray/////////////////
function logicFunction(){  
       if(questions.length > 0){
        splicer();
        timer= 5;
       
        // $("#timer").text("This timer " + timerPractice + " is just to stress you out ");
        // console.log(arrayPractice);
}else{$("#question").text("The End");}
}
///////////////////////////////////////
/////////////////TIMER/////////////////////
function timeDown() { 
    
    
    if ( timer > 0){
        timer--;   
       // console.log(timer);
       $("#timer").text(`Hurry Up ! ${timer}`);
            
    } else {
     
        logicFunction();
      clearInterval(interval);

                            if(questions.length > 0)
                            {
                                reset();
                            }else{
                                $("#question").text("The End");
                                }     
    }
}
var interval = setInterval(timeDown, 1000);
///////////////////////////////////////////
////////////////////////Reset/////////////////
//////// Reset Func///////
function reset()
{
    timer = 5.0;
 //console.log("This IS RESET FUNCTION"); 
    
    timeDown();
    interval = setInterval(timeDown, 1000);
}

////////////////////////////////////////////



function callingAQuestion()
{

//Gets an array of all possible questions from the questions object
// var arrayOfQuestions = Object.keys(questions);
  // console.log(randNumber)








  ///displaying a random question on html page
 
  //gets object value of the random question
  var answersObj = questions[arrayOfQuestions[randomNumber]];
  //gets an array of all keys of the answers object
  var arrayOfAnswers = Object.keys(answersObj);
  //displaying the answers on html page
  $("#index0").text(arrayOfAnswers[0]);
  $("#index1").text(arrayOfAnswers[1]);
  $("#index2").text(arrayOfAnswers[2]);
  $("#index3").text(arrayOfAnswers[3]);
  // will store the correct answer
  var correctAnswers;
  //loop through the answers to get the correct answer <script src="assets/javascript/app.js"></script>
  for (i = 0; i < arrayOfAnswers.length; i++){
      if (answersObj[arrayOfAnswers[i]] === true){
          correctAnswers = arrayOfAnswers[i]
      }}
 
}




      ///////////////////////////////////////////
    
    ///////////////on click function /////////
     $("#start").on("click", function()
      {
        logicFunction()
    });
////////////////////////////////////////

});


