'use strict';




let username = prompt('What is Your Name?');
alert('Hi ' + username + ', I am grateful to have you here');



let score =0;

function Color(){
  let favoritecolor = prompt('Do you think i like the black color?');
  favoritecolor = favoritecolor.toLowerCase();
  if (favoritecolor === 'yes' || favoritecolor === 'y') {
    //console.log('Your Right, Great.');
    alert('Your Right, Great.');
    score++;
  }
  else if (favoritecolor === 'no' || favoritecolor === 'n') {
  
    //console.log('Your wrong, it is my favorite color.');
    alert('Your wrong, it is my favorite color.');
  }
  else {
    alert('Your answer should be Yes/No or Y/N');
  }
}
Color();


function CarName(){
  let favoritecar = prompt('Do you think i like BMW cars?');

favoritecar = favoritecar.toLowerCase();
if (favoritecar === 'yes' || favoritecar === 'y') {
  //console.log('Your Right, i love the feeling of driving BMW .');
  alert('Your Right, i love the feeling of driving BMW .');
  score++;
}
else if (favoritecar === 'no' || favoritecar === 'n') {

  //console.log('Your wrong, it is my favorite car.');
  alert('Your wrong, it is my favorite car.');
}
else {
  alert('Your answer should be Yes/No or Y/N');
}
}
CarName();

let favoritefood = prompt('Do you think i like mansaf');

favoritefood = favoritefood.toLowerCase();
if (favoritefood === 'yes' || favoritefood === 'y') {

  //console.log('Your wrong, it is not my favorite food.');
  alert('Your wrong, it is not my favorite food.');
}
else if (favoritefood === 'no' || favoritefood === 'n') {
  //console.log('Your Right, Great.');
  alert('Your Right, Great.');
  score++;
}
else {
  alert('Your answer should be Yes/No or Y/N');
}

let likegames = prompt('Do you think i like games?');

likegames = likegames.toLowerCase();
if (likegames === 'yes' || likegames === 'y') {
  //console.log('Your Right, I love games , Especially Battle Royale Games.');
  alert('Your Right, I love games , Especially Battle Royale Games.');
  score++;
}
else if (likegames === 'no' || likegames === 'n') {

  //console.log('Your wrong, I love to spend some of my time playing games, Especially PUBG .');
  alert('Your wrong,  I love to spend some of my time playing games, Especially PUBG .');
}
else {
  alert('Your answer should be Yes/No or Y/N');
}

let reading = prompt('Do you think i like Reading?');

reading = reading.toLowerCase();
if (reading === 'yes' || reading === 'y') {
  //console.log('Your Right, I love reading , especially before go to sleep. ');
  alert('Your Right, I love reading , especially before go to sleep.');
  score++;
}
else if (reading === 'no' || reading === 'n') {

  //console.log('Your wrong, I love to spend some of my time some pages of web programming book.');
  alert('Your wrong,  I love to spend some of my time some pages of web programming book.');
}
else {
  alert('Your answer should be Yes/No or Y/N');
}





let itrate = 0;
for (let i = 0; i < 4; i++) {
  itrate = prompt('What do you think I rated the movie (It)? (Pick a number from 1 to 10, *You Have Four Attempts.)');
  if (itrate < 3) {
    alert('too low');

  }
  else if (itrate > 10) {
    alert('Please, Pick a number from 1 to 10');
  }
  else if (itrate === 3) {

    alert('too close');
  }
  else if (itrate === 5) {
    alert('too close');

  }
  else if (itrate > 5) {
    alert('too high');
  }
  else if (itrate === 4) {
    alert('That\'s right, this movie does not deserve a rating higher than 4.');
    score++;
    i = 4;

  }

}
alert('I rated (IT) movie with 4');

let typeofcars=['mercedes','audi','bmw','ford'];
let carsilike=0;
let flag=false;
for(let i= 0; i < 6; i++)
{
  carsilike=prompt('I like 4 types of cars, choose one and I will tell you if it is my favorite or not');
  carsilike=carsilike.toLowerCase();
  for(let j = 0; j < typeofcars.length; j++)
  {

    if(typeofcars[j]===carsilike)
    {
      alert('That\'s right, this is one of my favorite types of cars');
      flag=true;
      score++;
      i=6;
      break;
    }

  }
  if(flag)
  {
    break;
  }
  else
  {
    alert('This is wrong, this is not one of my favorite types of cars');
  }

}





alert(`thanks for playing my guessing game ${username} and your score is ${score}`);

alert('Mr. '+ username+' ; Again, I am grateful for your visit to my site. I hope you will spend an enjoyable and useful time here.');



/*switch(favoritecolor.toLowerCase())
{
case'yes':
console.log('Your Right, Great.');
break;
case'y':
console.log('Your Right, Great.');
break;
case'no':
console.log('Your wrong, it is my favorite color.');
break;
case'n':
console.log('Your wrong, it is my favorite color.');
break;
 default:
     alert('Your answer should be Yes/No or Y/N' );
*/



