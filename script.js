const answerContainer = document.querySelector("#letters-container"); 
const letters = document.querySelectorAll(".letter-inp");
const errorsQtt = document.querySelector("#errors-span")
const correctWord = "duro";
wordArray = correctWord.split('')

const checkValues = (letter, word) =>{
    word.forEach((l)=> {
        if(l == letter) return l;
        
    } )
}

letters.forEach((letter) =>{
    letter.addEventListener("click", (e) =>{
        e.preventDefault();
    })
})



wordArray.forEach(letter => {
    div = document.createElement("div");
    div.classList.add("letters-camp");
    p = document.createElement("p");
    p.classList.add("letter-answer");
    div.appendChild(p);
    answerContainer.appendChild(div);
})
