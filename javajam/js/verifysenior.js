var age;

age = prompt("Please enter your age: ")
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!"
    document.getElementById('senior').style.color = 'black';
} else {
    output = "Enjoy music and make memories!"
    document.getElementById('senior').style.color = 'black';
}

document.getElementById('senior').innerHTML = output;