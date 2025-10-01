const createAccountBtn = document.querySelector(".create-account-btn");
const createAccount = document.querySelector(".create-account")
let balance = 0;
createAccountBtn.addEventListener("click", () => {
   let createAccountInput = document.querySelector(".create-account-input");
   createAccountInput.style.display = "block";
   let createUser = createAccountInput.value;
   createAccountInput.value = ""
   createAccountInput.focus();
   console.log(createUser);
})


