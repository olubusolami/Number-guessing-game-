const button = document.querySelector(".btn--login");
const input = document.querySelector(".login--input");
const buttonGuess = document.querySelector(".btn__generate--number");
const form = document.querySelector(".login__container");
const guessContainer = document.querySelector(".guess__container");


button.addEventListener("click", function (event) {
  event.preventDefault();
  const formInput = input.value;

  if (formInput === "") {
    alert("Please enter your username");
  } else {
      guessContainer.classList.toggle("hidden")
      form.classList.toggle("hidden")
    }
  
});


//Generate a number between 1 and 3, including 3
const min = 1;
let max = 2;
function generateRandomInteger(max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let valueGuess = generateRandomInteger(max);

buttonGuess.addEventListener("click", (event) => {
  event.preventDefault()
  let value = window.prompt("Guess value");  
  if(Number(value) === valueGuess){
    max++
    alert("Welcome to stage 2");
  } else {
    alert("Wrong answer")
  }
})

