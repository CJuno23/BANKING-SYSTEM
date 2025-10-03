const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".withdraw-btn");
const checkBalance = document.querySelector(".check-balance-btn");
let currentBalanceText = document.createElement("div");
let insufficientFundsText = document.createElement("div");
let balance = 0;
let password = "";
let correctPassword = "12345";
while (password !== correctPassword) {
    password = prompt("Enter password");
    
    depositBtn.addEventListener("click", () => {
        let deposit = document.querySelector(".deposit")
        let depositInput = document.querySelector(".deposit-input");
        let depositLabel = document.querySelector(".label-deposit");
        depositInput.style.display = "block";
        depositLabel.style.display = "block";
        balance = Number(depositInput.value);
        currentBalanceText.textContent = (`Your current balance is ${balance}`);
        deposit.append(currentBalanceText);
        console.log(balance);
    });
    withdrawBtn.addEventListener("click", () => {
        let withdraw = document.querySelector(".withdraw")
        let withdrawInput = document.querySelector(".withdraw-input");
        let withdrawLabel = document.querySelector(".label-withdraw");
        withdrawLabel.style.display = "block";
        withdrawInput.style.display = "block";
        let withdrawValue = Number(withdrawInput.value);
        
        if (withdrawValue > balance) {
            insufficientFundsText.textContent = "Insufficient Funds";
            withdraw.append(insufficientFundsText);
        }else {
            let currentBalance = balance - withdrawValue;
            balance = currentBalance;
            currentBalanceText.textContent = balance;
            currentBalanceText.textContent = (`Your current balance is ${balance}`);
            withdraw.appendChild(currentBalanceText);
        }
    });
    checkBalance.addEventListener("click", () => {
        let checkBalance = document.querySelector(".check-balance");
        currentBalanceText.textContent = (`Your current balance is ${balance}`);
        checkBalance.append(currentBalanceText);
    })
}