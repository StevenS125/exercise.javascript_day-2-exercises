var userInput1 = prompt("Please Enter an Integer")
var userInput2 = prompt("Please Enter an Integer")
var printStatement = ""

for (let index = userInput1; index < userInput2; index++) {
    if (index == userInput1) {
    printStatement = index
    } else {
    printStatement = printStatement + ", " + index 
    }
}

alert(printStatement)