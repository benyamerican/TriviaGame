$(document).ready(function(){

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
   // var randNumb = Math.floor(Math.random() * questions.length);
    /////////////////////////////////////////////////
    function splicer(){
   var randNumb = Math.floor(Math.random() * questions.length);
        let x = questions[randNumb];
        
        questions.splice(randNumb,1) ;

        ///////////////SHOW ON THE HTML//////
        $("#question").text(x[0]);

        

        $("#index0").text(x[1][0]);
        $("#index1").text(x[2][0]);
        $("#index2").text(x[3][0]);
        $("#index3").text(x[4][0]); 
///////////////////////////Capture right or wrong//////////////
//////HERE NOT SURE WHY IT CAPTURES THE PREVIOUS VALUES AND THE CURRENT ALL TOGETHER/////
//////////////////COMMENT OUT LINE 130 IF YOU WANT//////
//////////WHEN ANSWERS ARE LOADED CLICK ON THE ANSWER/////
//////////////////SEEEEEE??????????///////////why???.....
//////////////capture answer 1///////////////////////////
        $("#index0").on("click",function(){
            if (x[1][1] === true){
                console.log("It is true");
                $("#index0").css("color", "green")}//console.log('It is true!')}
            else{
                $("#index0").css("color", "red");
                console.log('It is false!')}

        });
        //////////////capture answer 2///////////////////////////
        $("#index1").on("click",function(){
            if (x[2][1] === true){
                console.log('It is true!');
                $("#index1").css("color", "green")
        }
            else{
                $("#index1").css("color", "red");
                console.log('It is false!')}
        });
        //////////////capture answer 3///////////////////////////
        $("#index2").on("click",function(){
            if (x[3][1] === true){
                $("#index2").css("color", "green");
                console.log('It is true!')}
            else{
                $("#index2").css("color", "red");
                console.log('It is false!')}
        });
        //////////////capture answer 4///////////////////////////
        $("#index3").on("click",function(){
            if (x[4][1] === true){
                $("#index3").css("color", "green")
                console.log('It is true!')}
            else{
                $("#index3").css("color", "red");
                console.log('It is false!')}
        });
     //   console.log(x[1][1],x[2][1],x[3][1],x[4][1]);
     return randNumb;
    };
///////////////////////////////////////////////////////////
    ////////////////END OF SPLICER//////////////////////////////
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
   splicer();
      } else {
           $('body').text('DONE then showing the results here')
        }
    });
    ////////////////////////////
        });
    
    
        
        