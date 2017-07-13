'use strict'

var favColor= prompt('Lets play a game called yes or no. Is my favorite color Red?');
  if(favColor.toUpperCase() === 'YES' || favColor.toUpperCase() === 'Y'){
    alert('Congrats! Red is the best color');
    console.log('User answered correct');
} else{
    alert('Wrong!');
    console.log('User answered wrong');}

var liveJapan= prompt('Have I ever been to Japan?');
  if(liveJapan.toUpperCase() === 'YES' || liveJapan.toUpperCase() === 'Y'){
    alert('Correct! I lived there for 2 years');
    console.log('User answered correctly');
} else{
    alert('Wrong, I lived there for 2 years');
    console.log('User answered wrong');}

var hateOlives= prompt('I love olives, I can eat them with any thing.');
  if(hateOlives.toUpperCase() === 'NO' || hateOlives.toUpperCase() === 'N'){
    alert('Correct, olives are gross');
    console.log('User answered correctly');
} else{
    alert('Wrong');
    console.log('User answered wrong');}

var whichBranch= prompt('In 2013, I joined the Navy');
  if(whichBranch.toUpperCase() === 'NO' || whichBranch.toUpperCase() === 'N'){
    alert('Nice, I joined the Air Force. Also known as the BEST branch of the military');
    console.log('User answered correctly');
} else{
    alert('Wrong');
    console.log('User answered wrong');}

var jiuJitsu= prompt('My favorite thing to do is Brazilian Jiu Jitsu.');
  if(jiuJitsu.toUpperCase() === 'YES' || jiuJitsu.toUpperCase() === 'YES'){
    alert('Absolutely!');
    console.log('User answered correctly');
  } else{
    alert('Wrong');
    console.log('User answered wrong');}
//
var myAge = 26;
var yourGuess = 0;

while(yourGuess < 4 && ageQuestion !== myAge){
  var ageQuestion = prompt("How old am I?");
    if(ageQuestion < myAge){
      alert('Too young, try again');
      console.log('user guessed too low!');
      yourGuess++;
    }else if(ageQuestion > myAge){
      alert('Too old, try again');
      console.log('user guessed too old');
      yourGuess++;
    }else{
      alert('Correct!');
      console.log('Correct!');
      break;
    }


// }
var myCities = ["tokyo", "oklahoma City", "seattle"];
var userChoice = 0;

while(userChoice < 6 ){
  var cityQuestion= prompt('What cities have I lived in in the past 3 years?'.toLowerCase());
  for(i=0; i< myCities.length; i++){
    if(cityQuestion === myCities[i]){
      alert('Nice! You are correct!');
      console.log('User answered correctly');
      userChoice=0;
    }else if(cityQuestion !== myCities[i]){
      alert("Keep going");
      userChoice++;
    }else{
      alert('Sorry, you are out of tries. I have lived in Tokyo, Seattle, and Oklahoma City');
    }
    }
  }
