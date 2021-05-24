'use strict';

let username = prompt("What is Your Name?");
alert("Hi " + username + ", I am grateful to have you here");



let favoritecolor = prompt("Do you think i like the black color?")


favoritecolor = favoritecolor.toLowerCase();
if (favoritecolor === 'yes' || favoritecolor === 'y') {
    //console.log('Your Right, Great.');
    alert("Your Right, Great.");

}
else if (favoritecolor === 'no' || favoritecolor === 'n') {

    //console.log('Your wrong, it is my favorite color.');
    alert("Your wrong, it is my favorite color.");
}
else {
    alert('Your answer should be Yes/No or Y/N');
}

let favoritecar = prompt('Do you think i like BMW cars?');

favoritecar = favoritecar.toLowerCase();
if (favoritecar === 'yes' || favoritecar === 'y') {
    //console.log('Your Right, i love the feeling of driving BMW .');
    alert("Your Right, i love the feeling of driving BMW .");

}
else if (favoritecar === 'no' || favoritecar === 'n') {

    //console.log('Your wrong, it is my favorite car.');
    alert("Your wrong, it is my favorite car.");
}
else {
    alert('Your answer should be Yes/No or Y/N');
}

let favoritefood = prompt('Do you think i like mansaf');

favoritefood = favoritefood.toLowerCase();
if (favoritefood === 'yes' || favoritefood === 'y') {

    //console.log('Your wrong, it is not my favorite food.');
    alert("Your wrong, it is mot my favorite food.");
}
else if (favoritefood === 'no' || favoritefood === 'n') {
    //console.log('Your Right, Great.');
    alert("Your Right, Great.");

}
else {
    alert('Your answer should be Yes/No or Y/N');
}

let likegames = prompt('Do you think i like games?');

likegames = likegames.toLowerCase();
if (likegames === 'yes' || likegames === 'y') {
    //console.log('Your Right, I love games , Especially Battle Royale Games.');
    alert("Your Right, I love games , Especially Battle Royale Games.");

}
else if (likegames === 'no' || likegames === 'n') {

    //console.log('Your wrong, I love to spend some of my time playing games, Especially PUBG .');
    alert("Your wrong,  I love to spend some of my time playing games, Especially PUBG .");
}
else {
    alert('Your answer should be Yes/No or Y/N');
}

let reading = prompt('Do you think i like Reading?');

reading = reading.toLowerCase();
if (reading === 'yes' || reading === 'y') {
    //console.log('Your Right, I love reading , especially before go to sleep. ');
    alert("Your Right, I love reading , especially before go to sleep.");

}
else if (reading === 'no' || lreading === 'n') {

    //console.log('Your wrong, I love to spend some of my time some pages of web programming book.');
    alert("Your wrong,  I love to spend some of my time some pages of web programming book.");
}
else {
    alert('Your answer should be Yes/No or Y/N');
}







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



