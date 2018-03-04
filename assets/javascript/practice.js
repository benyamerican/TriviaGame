/*
$(document).ready(function() {


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
    
    });
    
    
    
    */