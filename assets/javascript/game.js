$( document ).ready(function(){
  var randomTarget = Math.floor(Math.random()*50 + 1)
  // Selects a randomTarget number to be shown at the start of the game
  $("#goalNumber").html(randomTarget);
// Appending randomTarget number to the randomTargetNumber id in the html doc

  var randomRed = Math.floor(Math.random()*10 + 1);
  var randomBlue = Math.floor(Math.random()*10 + 1);
  var randomYellow = Math.floor(Math.random()*10 + 1);
  var randomGreen = Math.floor(Math.random()*10 + 1);
// Setting up random numbers for each jewel

// console.log(randomTarget);
// console.log(randomRed);	
// console.log(randomBlue);	
// console.log(randomYellow);	
// console.log(randomGreen);		


  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

$("#userWins").text(wins);
$("#userLosses").text(losses);

//resets the game
function reset() {
	randomTarget = Math.floor(Math.random() * 50 + 1);
	$("#goalNumber").html(randomTarget);

	randomRed = Math.floor(Math.random() * 10 + 1);
	randomBlue = Math.floor(Math.random() * 10 + 1) ;
	randomYellow = Math.floor(Math.random() * 10 + 1);
	randomGreen = Math.floor(Math.random() * 10 + 1);
	userTotal = 0;
	$("#userTotal").html(userTotal);
}

//adds the wins to the userTotal
function winner(){
  wins++; 
  $("#userWins").text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
  losses++;
  $("#userLosses").text(losses);
  reset();
}
//sets up click for crystals & win conditions
  $("#crystalRed").on ("click", function(){
    userTotal = userTotal + randomRed;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal); 
        if (userTotal == randomTarget){
          alert("You win!");
          winner();
        }
        else if ( userTotal > randomTarget){
       	  alert("You lose!");
          loser();
        }   
  })  
  $("#crystalBlue").on ("click", function(){
    userTotal = userTotal + randomBlue;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal); 
        if (userTotal == randomTarget){
          alert("You win!")
          winner();
        }
        else if ( userTotal > randomTarget){
          alert("You lose!");
          loser();
        } 
  })  
  $("#crystalYellow").on ("click", function(){
    userTotal = userTotal + randomYellow;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal);
        if (userTotal == randomTarget){
          alert("You win!")
          yay();
        }
        else if ( userTotal > randomTarget){
          alert("You lose!");
          loser();
        } 
  })  
  $("#crystalGreen").on ("click", function(){
    userTotal = userTotal + randomGreen;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal); 
      
          if (userTotal == randomTarget){
          yay();
        }
        else if ( userTotal > randomTarget){
          alert("You lose!");
          loser();
        }
  });   
}); 






