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

var myAge= prompt("It's 2017. Can you guess how old I am.")
  if(myAge == 26){
    alert('GOOD JOB! You guessed right!');
    console.log('User guessed right');
  }
 else if(myAge > 26){
   alert('Whoa! try again. Too old.');
   console.log('User guessed too old.');
 }
 else if(myAge < 26){
   alert('Too young! Try again.');
   console.log('User guessed too young.');
 }
else{
  alert('Nice try, I am actually 26 years old');
  console.log('User ran out of tries');
}
