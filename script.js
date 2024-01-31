const numbers = document.querySelectorAll(".numbers");
const symbols = document.querySelectorAll(".symbols")
const visualReturn = document.querySelector("#result");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const sumBtn = document.querySelector("#sum")
const minusBtn = document.querySelector("#minus")
const multBtn = document.querySelector("#mult")
const divBtn = document.querySelector("#divide")
const equalBtn = document.querySelector("#equal-symbol")



let inputedNums = []
const fullNums = [0]
let index = 1, result = 0

numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
        e.preventDefault();
        inputedNums.push(e.target.innerText);
        const calcNum = inputedNums.join("");
        visualReturn.innerText = calcNum;
    })
})


clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    visualReturn.innerText = ""
    result = 0;
})

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputedNums.pop();
    const calcNum = inputedNums.join("");
    visualReturn.innerText = calcNum;
})

sumBtn.addEventListener("click", ((e) => {
    e.preventDefault();
    fullNums.push(parseFloat(visualReturn.innerText));
    inputedNums = [];
    result = fullNums[index-1] + fullNums[index]
    index++
    visualReturn.innerText = "";
}))

multBtn.addEventListener("click", ((e) => {
    e.preventDefault();
    fullNums.push(parseFloat(visualReturn.innerText));
    inputedNums = [];
    result *= fullNums[index]
    index++
    visualReturn.innerText = "";
}))

divBtn.addEventListener("click", ((e) => {
    e.preventDefault();
    fullNums.push(parseFloat(visualReturn.innerText));
    inputedNums = [];
    result /= fullNums[index]
    index++
    visualReturn.innerText = "";
}))

minusBtn.addEventListener("click", ((e) => {
    e.preventDefault();
    if(fullNums[index-1]===0){
        
        return;
    }
    fullNums.push(parseFloat(visualReturn.innerText));
    inputedNums = [];
    result = fullNums[index-1] + fullNums[index]
    index++
    visualReturn.innerText = "";
}))

equalBtn.addEventListener("click", ((e) => {
    e.preventDefault();
    visualReturn.innerText = result;
}))