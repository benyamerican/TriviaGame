
$(document).ready(function() {

/*
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
//////////////////////////////////////////////
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
    /////////////////////////////////////////
    */
////////////Arraysand stuff ////////////
var questions = 
[
    {question: " Question 1 as an string",
    answers :{
        
        " Answer to 1.1 " : false,
    " Answer to 1.2 " : false,
    "  Answer to 1.3 " : true,
    "   Answer to 1.4 " : false,
    
        

    }
},
{question: " Question 2 as an string",
answers :{
    
    " Answer to 2.1 " : false,
    " Answer to 2.2 " : false,
    "  Answer to 2.3 " : false,
    "   Answer to 2.4 " : true,
    
    

}},
{question: " Question 3 as an string",
answers :{
    
    " Answer to 3.1 " : false,
    " Answer to 3.2 " : true,
    "  Answer to 3.3 " : false,
    "   Answer to 3.4 " : true,
    
    

}},
{question: " Question 4 as an string",
answers :{
    
    " Answer to 4.1 " : true,
    " Answer to 4.2 " : false,
    "  Answer to 4.3 " : false,
    "   Answer to 4.4 " : false,
    

}
}
    
    
        
      ];
      //////////////////////////////
    //////////////////for loop for right answer//////


var randNumb = Math.floor(Math.random() * questions.length)
console.log(questions.length);
console.log(randNumb);



//loop through the answers to get the correct answer <script src="assets/javascript/app.js"></script>
////////////////////////////////////////////////////////////////////////////////////////
var correctAnswers;
var wrongAnswers;
var answersValues = Object.values(questions[randNumb].answers);
console.log(answersValues);

for (i = 0; i < answersValues.length; i++){
  if (answersValues[i] === true){
      correctAnswers = answersValues[i];
      console.log(correctAnswers)}
      else{}
    }
/////////////////////on click functions ////////////////
///////////////////ON click for the right answer////////
    $("#index0").on("click", function(){
    console.log("Clicking on answer 1 is working")
    });
    $("#index1").on("click", function(){
    console.log("Clicking on answer 2 is working")
    });
    $("#index2").on("click", function(){
    console.log("Clicking on answer  3 is working")
    });
    $("#index3").on("click", function(){
    console.log("Clicking on answer 4 is working")
    });
////////////////////////////////////////
//////////////////////////////////////////////////////
    });


    
    
    
    