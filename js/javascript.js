var answer = prompt("Do you love pitbulls?");
if (answer === 'yes') {
    alert('Not all Heroes wear capes!!!!');
}
else if (answer === 'no') {
    alert('you suck');
}
else if (answer === 'maybe') {
    alert('Walk a dog and i promise you will fall in love');
}
else {
    alert('Go away');
}

var answer = prompt("Will you walk a Pitbull?");
if (answer === 'yes') {
    alert('Beware they are needy and will follow you home');
}
else if (answer === 'no') {
    alert('why are you a horrible human being');
}
else if (answer === 'maybe') {
    alert('There are no maybes in life');
}
else {
    alert('They will lick you to death!!!!!!');
}



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

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');