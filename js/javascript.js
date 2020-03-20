
function walk(){
    var answer = prompt("How many dogs would you like to walk?");
    var album = '';
    var pic = '<img src="https://i.pinimg.com/236x/70/bd/e5/70bde558835ff0d2b29154150a2a784c--pittbulls-beautiful-dogs.jpg">';

    while( answer === '' || isNaN(answer) ){
        answer = prompt('Put in a number')
    }

    for (var i = 0 ; i < answer ; i++){
        album = album + pic;
    }

    return album;
};








// if (answer === 'yes') {
//     alert('');
// }
// else if (answer === 'no') {
//     alert('you suck');
// }
// else if (answer === 'maybe') {
//     alert('Walk a dog and i promise you will fall in love');
// }
// else {
//     alert('Go away');
// }





//for loop starts

// for (var i = 0; i < 7; i++) {
//     idk()
// }



// while loop starts

// var count = 0;

// while (count < 7) {
//     document.writeln("looping away");

//     count++;
// }







function myFunction() {
    var txt;
    var r = confirm("You do love Pitbulls");
    if (r == true) {
      txt = "I told you so!!!!";
    } else {
      txt = "How dare you!!!!";
    }
    document.getElementById("demo").innerHTML = txt;
  }