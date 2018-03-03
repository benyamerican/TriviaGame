$(document).ready(function() {

/*
//Store Questions Answers and the answers value ________________
var questions = {
    question0: {
        answer01: false,
        answer02: false,
        answer03: true,
        answer04: false
    },
    question1: {
        answer11: true,
        answer12: false,
        answer13: false,
        answer14: false
    },
    question2: {
        answer21: true,
        answer22: false,
        answer23: false,
        answer24: false
    },
    question3: {
        answer31: true,
        answer32: false,
        answer33: false,
        answer34: false
    }
}
var callingAQuestion = function(){
    //Gets an array of all possible questions from the questions object
    var arrayOfQuestions = Object.keys(questions);
    

    //Generate a random number 
    var randNumber = Math.floor(Math.random() * arrayOfQuestions.length)
    // console.log(randNumber)

    //gets object value of the random question
    var answersObj = questions[arrayOfQuestions[randNumber]];
    
    //gets an array of all keys of the answers object
    var arrayOfAnswers = Object.keys(answersObj);
    
    // will store the correct answer
    var correctAnswers;

    //loop through the answers to get the correct answer
    for (i = 0; i < arrayOfAnswers.length; i++){
        if (answersObj[arrayOfAnswers[i]] === true){
            correctAnswers = arrayOfAnswers[i]
         
        }
    }


          //  splice function -----------------------------
    // ====================================================
    ////////////////////////////////////////////////////////

function splice()
{
    
    arrayOfQuestions = arrayOfQuestions.splice(randNumber,1);

}
// console.log(arrayOfQuestions[randNumber]);
// console.log(correctAnswers);
/////////////Array logic////////////






/////////////////////////////////////////////////////////////
// ____________________________________________
// ======================================================

}
// Timing Function  ___________________
////////////////////////////////////////////////////
var time = 3.0;
function timeDown() {   
    if ( time > 0){
        time--;     
        $("#timer").text("This timer " + time + " is just to stress you out ");
    } else {
      clearInterval(interval);
    //   callingAQuestion();
      $("#timer").text("This timer " + time + " is just to stress you out ");
      arrayLogic()
    }
}

var interval = setInterval(timeDown, 1000);

*/
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
var arrayPractice = ["Q1","Q2","Q3", "Q4"];//,"D","E","F","G"
var timerPractice = 3.0;
console.log(arrayPractice);
/////////////splicer//////////////
var randomNumPractice;
function splicePractice(){
    randomNumPractice = Math.floor(Math.random() * arrayPractice.length) 
    
    console.log(arrayPractice[randomNumPractice] + " Will be displayed ");  
   
    arrayPractice.splice(randomNumPractice,1);  
    
}
splicePractice();

/////////////////////////////////
////////Practice Reset Func///////
function resetPractice()
{
    timerPractice = 3.0;
    // console.log("This IS RESET FUNCTION"); 
    
    timeDownPractice();
    intervalPractice = setInterval(timeDownPractice, 1000);
}
/////////////////Logic of PracticeArray/////////////////
function arrayLogic(){  
   
    if(arrayPractice.length > 0){
        splicePractice();
        timerPractice = 3;
       
        // $("#timer").text("This timer " + timerPractice + " is just to stress you out ");
        // console.log(arrayPractice);
}else{}
}
/////////////////////////Timer Practice/////////////
function timeDownPractice() { 
    
    
    if ( timerPractice > 0){
        timerPractice--;   
        console.log(timerPractice);
            
    } else {
     
        arrayLogic();
      clearInterval(intervalPractice);

                            if(arrayPractice.length > 0)
                            {
                                resetPractice();
                            }else{
                                 console.log("End of The Game")
                                }     
    }
}
var intervalPractice = setInterval(timeDownPractice, 1000);
///////////////////////////////////////////
///////////////on click function /////////
$("#start").on("click", function()
 {
 arrayLogic();
});
/////////////////////////////////////////

});



