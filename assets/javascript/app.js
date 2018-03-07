
$(document).ready(function() {


//Store Questions Answers and the answers value ________________
var questions = 
[
    {question: " Question 1 as a string",
    answers :{
        
        " Answer to 1.1 " : true,
    " Answer to 1.2 " : false,
    "  Answer to 1.3 " : false,
    "   Answer to 1.4 " : false,
    
        

    }
},
{question: " Question 2 as a string",
answers :{
    
    " Answer to 2.1 " : true,
    " Answer to 2.2 " : false,
    "  Answer to 2.3 " : true,
    "   Answer to 2.4 " : false,
    
    

}},
{question: " Question 3 as a string",
answers :{
    
    " Answer to 3.1 " : false,
    " Answer to 3.2 " : true,
    "  Answer to 3.3 " : false,
    "   Answer to 3.4 " : false,
    
    

}},
{question: " Question 4 as a string",
answers :{
    
    " Answer to 4.1 " : true,
    " Answer to 4.2 " : false,
    "  Answer to 4.3 " : false,
    "   Answer to 4.4 " : false,
    

}
}
    
    
        
      ];
      ////////////////////Var and stuff/////////
      var correctAnswers;
      var wrongAnswers;
      timer= 5;
/////////////////////////////////////////////////////
      

      

    ///////////////////Splicer FUnction///////
     function splicer(){ 
        let randomNumber = Math.floor(Math.random() * questions.length);
        var displayedQuestion = questions[randomNumber].question;   
      //  console.log(displayedQuestion);
         var displayAnswers = Object.keys(questions[randomNumber].answers);
       /////// displaying the answers on html page
         $("#index0").text(displayAnswers[0]);
         $("#index1").text(displayAnswers[1]);
         $("#index2").text(displayAnswers[2]);
         $("#index3").text(displayAnswers[3]); 

        $("#question").text(displayedQuestion);
        // console.log(randomQuestion);
        questions.splice(randomNumber,1);  
        
              //////////////////////////////////for loop to find the correct ans////
// var answersValues = Object.values(questions[randomNumber].answers);
// console.log(answersValues);
// function rightWrongAns(){
// for (i = 0; i < answersValues.length; i++){
//     if (answersValues[i] === true){
//         correctAnswers = answersValues[i];
//         correctAnswers = "THis is so  true"
//         console.log(correctAnswers)}
//         else if (answersValues[i] !== true)
//         {
//             console.log("So Wrong");
//         }
//     }
}
    
   
    
///////////////End of the splicer Function/////
/////////////////Logic of PracticeArray/////////////////
function logicFunction(){  
       if(questions.length > 0){
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
    splicer();
   
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

  //gets an array of all keys of the answers object
 
  // will store the correct answer

 
}




      ///////////////////////////////////////////

    
    ///////////////on click function /////////
     $("#start").on("click", function()
      {
        reset();
        logicFunction();
        
    });
    ////////////////////////////////////////////////////////
    ///////////////////ON click for the right answer////////
    $("#index0").on("click", function(){
        console.log("Clicking on answer 1 is working");
        reset();
        });
        $("#index1").on("click", function(){
        console.log("Clicking on answer 2 is working");
        reset();
        });
        $("#index2").on("click", function(){
        console.log("Clicking on answer  3 is working");
        reset();
        });
        $("#index3").on("click", function(){
        console.log("Clicking on answer 4 is working");
        reset();
        });
////////////////////////////////////////

});


