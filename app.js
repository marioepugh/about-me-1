'use strict';

var userScore = [];

function (){

}
var favColor = prompt('Lets play a game called yes or no. Is my favorite color Red?');
if(favColor.toUpperCase() === 'YES' || favColor.toUpperCase() === 'Y'){
  alert('Congrats! Red is the best color');
  console.log('User answered correct');
  userScore.push('question 1');
} else{
  alert('Wrong!');
  console.log('User answered wrong');}

var liveJapan = prompt('Have I ever been to Japan?');
if(liveJapan.toUpperCase() === 'YES' || liveJapan.toUpperCase() === 'Y'){
  alert('Correct! I lived there for 2 years');
  console.log('User answered correctly');
  userScore.push('queston 2');
} else {
  alert('Wrong, I lived there for 2 years');
  console.log('User answered wrong');}

var hateOlives = prompt('I love olives, I can eat them with any thing.');
if(hateOlives.toUpperCase() === 'NO' || hateOlives.toUpperCase() === 'N'){
  alert('Correct, olives are gross');
  console.log('User answered correctly');
  userScore.push('question 3');
} else{
  alert('Wrong');
  console.log('User answered wrong');}

var whichBranch = prompt('In 2013, I joined the Navy');
if(whichBranch.toUpperCase() === 'NO' || whichBranch.toUpperCase() === 'N'){
  alert('Nice, I joined the Air Force. Also known as the BEST branch of the military');
  console.log('User answered correctly');
  userScore.push('question 4');
} else{
  alert('Wrong');
  console.log('User answered wrong');}

var jiuJitsu = prompt('My favorite thing to do is Brazilian Jiu Jitsu.');
if(jiuJitsu.toLowerCase() === 'YES' || jiuJitsu.toLowerCase() === 'YES'){
  alert('Absolutely!');
  console.log('User answered correctly');
  userScore.push('question 5');
} else{
  alert('Wrong');
  console.log('User answered wrong');}

var myAge = 26;
var yourGuess = 0;

while(yourGuess < 4 && ageQuestion !== myAge){
  var ageQuestion = parseInt(prompt('How old am I?'));
  if(ageQuestion < myAge){
    alert('Too young, try again');
    console.log('user guessed too low!');
    yourGuess++;
  } else if (ageQuestion > myAge){
    alert('Too old, try again');
    console.log('user guessed too old');
    yourGuess++;
  }else{
    alert('Correct!');
    console.log('Correct!');
    userScore.push('question6');
    yourGuess = 4;
  }


}
var myCities = ['tokyo', 'oklahoma city', 'seattle'];
var userChoice = 6;

while(userChoice > 0){
  var cityQuestion = prompt('What cities have I lived in in the past 3 years?');

  for(var i = 0; i < myCities.length; i++){
    if(cityQuestion.toLowerCase() === myCities[i].toLowerCase()){
      alert('Nice! You are correct!');
      userChoice = -1;
      console.log('User answered correctly');
      userScore.push('Question 7');
      break;
    }
  }
      if(userChoice > 0){
        alert('Sorry, wrong answer. You have ' + userChoice-- + ' guesses left' );
        console.log('User answered incorrect. he has ' + userChoice + ' guesses left');
  }

    if(userChoice === 0) {
      alert('Ha, better luck next time.');
      console.log('user answered incorrectly! Game over');
    }
}

alert('You got ' + userScore.length + ' out of 7 correct' );
console.log('User score card');




    // if(cityQuestion !== myCities[i].toLowerCase()){
    //   alert('Keep going');
    //   userChoice++ ;
    //   break;
    // }
