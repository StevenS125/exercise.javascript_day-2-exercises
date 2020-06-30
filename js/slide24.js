var newArr = [];

for (let i = 0; i < 10; i++) {
    newArr[i] = Math.floor(Math.random() * 11); 
    
}
console.log(newArr);
let userInput1=0
while(userInput1 < 10 && userInput1 >= 0) {
userInput1 = prompt("Change the array in what position?")
let userInput2 = prompt("Change value at positon " + userInput1 + " to?")
console.log("Input Index: " + userInput1 + "\n" + "Input Value: " + userInput2)
newArr[userInput1] = parseInt(userInput2)
console.log(newArr);
}
