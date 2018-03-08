
$(document).ready(function() {


//Store Questions Answers and the answers value ________________
////////////Arrays and stuff ////////////
var questions = 
[ 
    ////////array of Q1//////////////
    [
        " Question 1 as a string",
    [ " Answer to 1.1 " , false],
    [ " Answer to 1.2 " , false],
    [ " Answer to 1.3 " , false],
    [ " Answer to 1.4 " , false],
    ],
        ////////array of Q2//////////////
        [
            " Question 2 as a string",
        [ " Answer to 2.1 " , false],
        [ " Answer to 2.2 " , false],
        [ " Answer to 2.3 " , false],
        [ " Answer to 2.4 " , false],
        ],
            ////////array of Q3//////////////
    [
        " Question 3 as a string",
    [ " Answer to 3.1 " , false],
    [ " Answer to 3.2 " , false],
    [ " Answer to 3.3 " , false],
    [ " Answer to 3.4 " , false],
    ],
        ////////array of Q4//////////////
        [
            " Question 4 as a string",
        [ " Answer to 4.1 " , false],
        [ " Answer to 4.2 " , false],
        [ " Answer to 4.3 " , false],
        [ " Answer to 4.4 " , false],
        ]
     
        ];
           ////////////////Generate a Random number////////
           var randNumb = Math.floor(Math.random() * questions.length);


//////////////////////SUBTRACTING 1 from Question array Length////
function splicer(){
randNumb = Math.floor(Math.random() * questions.length);

if(questions.length > 0){
    var pickRandomQuestion = questions[randNumb][0];  
    var pickRelatedAnswer = questions[randNumb];  
    questions.splice(randNumb,1);
    console.log(pickRelatedAnswer);
    ////////////////display question on html//////////////////////////
$("#question").text(pickRandomQuestion);
///////////display answers on html////////
$("#index0").text(pickRelatedAnswer[0]);
$("#index1").text(pickRelatedAnswer[1]);
$("#index2").text(pickRelatedAnswer[2]);
$("#index3").text(pickRelatedAnswer[3]); 
//////////////////////////////////////////////////////
}
else{
    $("body").empty();
  
    ////////////////display question on html//////////////////////////
// $("#question").html("DONE");
// $("#index0").html("Score");
// $("#index1").html("Correct Answer");
// $("#index2").html("Wrong Answer");
// $("#index3").html("Skipped"); 
//////////////////////////////////////////////////////
};
;
}
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
       splicer()
        
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


