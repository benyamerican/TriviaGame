
$(document).ready(function() {

/*
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
//////////PRACTICE///////////////////////////PRACTICE/////////////////
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
function splicer(){
randNumb = Math.floor(Math.random() * questions.length);

//////////////////
if(questions.length > 0){
    let pickRandomQuestion = questions[randNumb][0];  
    let pickRelatedAnswer = questions[randNumb];  
    questions.splice(randNumb,1);
  //  console.log(pickRelatedAnswer);
    ////////////////display question on html//////////////////////////
 $("#question").text(pickRandomQuestion);
// ///////////display answers on html////////
 $("#index0").text(pickRelatedAnswer[1][0]);
 $("#index1").text(pickRelatedAnswer[2][0]);
 $("#index2").text(pickRelatedAnswer[3][0]);
 $("#index3").text(pickRelatedAnswer[4][0]); 
 //////////////////////////////////////////////////////
}
else{  
    ////////////////display question on html//////////////////////////
$("#question").text("DONE");
$("#index0").text("Score :");
$("#index1").text("Correct Answer :");
$("#index2").text("Wrong Answer :");
$("#index3").text("Skipped :"); 


//////////////////////////////////////////////////////
}
return questions[randNumb];

}


$("#test").on("click", function()
{
  console.log(splicer());
});

///////OnClick///////////////////
$("#start").on("click", function()
{
splicer();
});

////////////////////////////
    });


    
    
    
    