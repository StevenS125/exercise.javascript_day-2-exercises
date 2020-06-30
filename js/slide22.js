var answer = false
var number = 7
var userInput = prompt("Please Enter an Integer")
while (answer == false) {
    userInput = prompt("Please Re-Enter")
    if (userInput == number) {
        answer = true
        alert("Number Squarew is " + Math.pow(number, 2))
    }
}