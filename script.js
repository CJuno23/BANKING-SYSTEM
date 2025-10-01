/*const createAccountBtn = document.querySelector(".create-account-btn");
const createAccount = document.querySelector(".create-account")
let accountNumber = [];
createAccountBtn.addEventListener("click", () => {
   let createAccountInput = document.querySelector(".create-account-input");
   let createAccountNumberInput = document.querySelector(".create-account-number")
   createAccountInput.style.display = "block";
   createAccountNumberInput.style.display = "block";
   let createUser = createAccountInput.value;
   let randomNumber = Math.floor(1000 + Math.random() * 9000);
   createAccountNumberInput = randomNumber;
   let createAccountNumber = createAccountNumberInput;
   createAccountInput.value = ""
   createAccountInput.focus();
   console.log(createUser);
   console.log(createAccountNumber)
   accountNumber = randomNumber;
})
console.log(accountNumber)*/

let numbers = []; // empty array

for (let i = 0; i < 4; i++) {
    let randomDigit = Math.floor(Math.random() * 10); // random 0–9
    numbers.push(randomDigit); // lagay sa array
}

console.log(numbers.join(""));
