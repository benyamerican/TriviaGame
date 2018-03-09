$(document).ready(function() {

    
    //////////PRACTICE///////////////////////////PRACTICE/////////////////
    //////////PRACTICE///////////////////////////PRACTICE/////////////////
    //////////PRACTICE///////////////////////////PRACTICE/////////////////
      
    ////////////Arrays and stuff ////////////
    var questions = 
    [ 
        ////////array of Q1//////////////
        [
            " Question 1 as a string",
        [ " Answer to 1.1 " , false],
        [ " Answer to 1.2 " , false],
        [ " Answer to 1.3 " , true],
        [ " Answer to 1.4 " , false],
        ],
            ////////array of Q2//////////////
            [
                " Question 2 as a string",
            [ " Answer to 2.1 " , false],
            [ " Answer to 2.2 " , false],
            [ " Answer to 2.3 " , false],
            [ " Answer to 2.4 " , true],
            ],
                ////////array of Q3//////////////
        [
            " Question 3 as a string",
        [ " Answer to 3.1 " , true],
        [ " Answer to 3.2 " , false],
        [ " Answer to 3.3 " , false],
        [ " Answer to 3.4 " , false],
        ],
            ////////array of Q4//////////////
            [
                " Question 4 as a string",
            [ " Answer to 4.1 " , false],
            [ " Answer to 4.2 " , true],
            [ " Answer to 4.3 " , false],
            [ " Answer to 4.4 " , false],
            ]
         
            ];
    ////////////////Generate a Random number////////
    var randNumb = Math.floor(Math.random() * questions.length);
    /////////////////////////////////////////////////
    function splicer(){
   // let questions;
    randNumb = Math.floor(Math.random() * questions.length);
    //////////////////////////////
     
    //////////////////////////////
    // if(questions.length > 0){
        let randomItem = questions[randNumb];
        
      //  console.log(randNumb);
       // console.log(randomItem[0]);
        // $("#question").text(randomItem[0]);

      //  console.log(randomItem[1][0],randomItem[2][0],randomItem[3][0],randomItem[1][0]);

        // $("#index0").text(randomItem[1][0]);
        // $("#index1").text(randomItem[2][0]);
        // $("#index2").text(randomItem[3][0]);
        // $("#index3").text(randomItem[1][0]);

      // console.log(randomItem[1][1],randomItem[2][1],randomItem[3][1],randomItem[4][1]);

      // $("#question").text(randomItem[0]);
        questions.splice(randNumb,1) ;
        return randomItem;
        
    // }
    // else{  
       // console.log("DONE");
        // $("#question").text("DONE");

        // $("#index0").text('DONE');
        // $("#index1").text('DONE');
        // $("#index2").text('DONE');
        // $("#index3").text('DONE');
    //}
    
    };
    ////////////////SHOWING THE PICKED QUESTION ON HTML///////
   // let x = splicer();
   
    function printingOnPage(){
        let x = splicer();

        $("#question").text(x[0]);

        

        $("#index0").text(x[1][0]);
        $("#index1").text(x[2][0]);
        $("#index2").text(x[3][0]);
        $("#index3").text(x[4][0]); 
///////////////////////////Capture right or wrong//////////////
//////HERE NOT SURE WHY IT CAPTURES THE PREVIOUS VALUES TOO/////
//////////WHEN ANSWERS ARE LOADED CLICK ON THE ANSWER/////
//////////////////SEEEEEE??????????///////////why???.....

//////////////capture answer 1///////////////////////////
        $("#index0").on("click",function(){
            if (x[1][1] === true){console.log('It is true!')}
            else{console.log('It is false!')}
        });
        //////////////capture answer 2///////////////////////////
        $("#index1").on("click",function(){
            if (x[2][1] === true){console.log('It is true!')}
            else{console.log('It is false!')}
        });
        //////////////capture answer 3///////////////////////////
        $("#index2").on("click",function(){
            if (x[3][1] === true){console.log('It is true!')}
            else{console.log('It is false!')}
        });
        //////////////capture answer 4///////////////////////////
        $("#index3").on("click",function(){
            if (x[4][1] === true){console.log('It is true!')}
            else{console.log('It is false!')}
        });




     //   console.log(x[1][1],x[2][1],x[3][1],x[4][1]);

    
    }
    ///////////////////////////////////////////////////////////
    ////////////////END OF SPLICER
    /////////////////Logic of PracticeArray/////////////////

///////////////////////////////////////
/////////////////printing Function/////////////////////
 


//////////////END OF TIMING STUFF//////////
////////////////////////////////////////////
    $("#test").on("click",function(){
        console.log('TestRun')
 
      
    });
    ///////OnClick///////////////////
    $("#start").on("click", function()
    {
       if (questions.length > 0){
       printingOnPage();

    
       }
       else {}
       
    });
    ////////////////////////////
        });
    
    
        
        