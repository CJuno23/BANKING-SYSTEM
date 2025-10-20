const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".withdraw-btn");
const confirmDepositBtn = document.querySelector(".confirm-deposit-btn");
const confirmWithdrawBtn = document.querySelector(".confirm-withdraw-btn");
let currentBalanceText = document.createElement("div");
let insufficientFundsText = document.createElement("div");
let deposit = document.querySelector(".deposit");
let depositInput = document.querySelector(".deposit-input");
let depositLabel = document.querySelector(".label-deposit");
let withdraw = document.querySelector(".withdraw");
let withdrawInput = document.querySelector(".withdraw-input");
let withdrawLabel = document.querySelector(".label-withdraw");
let mainBalance = document.querySelector(".main-balance");
let showBalance = document.querySelector(".show-balance");
let recentTransaction = document.querySelector(".recent-transaction");
let transactionList = document.querySelector(".transaction-list");
let balance = 0;
/*let password = "";
let correctPassword = "12345";
while (password !== correctPassword) {
    password = prompt("Enter password");
}*/
depositBtn.addEventListener("click", () => {
    depositInput.style.display = "block";
    depositLabel.style.display = "block";
    confirmDepositBtn.style.display = "block"
    depositBtn.disabled = true;
});
confirmDepositBtn.addEventListener("click", () => {
    balance += Number(depositInput.value);
        if (balance !== 0) {
            currentBalanceText.textContent = (`Your current balance is $${balance}`);
            deposit.append(currentBalanceText);
            confirmDepositBtn.style.display = "none";
            depositBtn.disabled = false;
        }

        const li = document.createElement("li");
        li.textContent = `Deposit: $${depositInput.value}`;
        transactionList.append(li)
    depositInput.focus();
    depositInput.value = "";
    showBalance.textContent = balance;
    mainBalance.append(showBalance);
});
withdrawBtn.addEventListener("click", () => {
    withdrawLabel.style.display = "block";
    withdrawInput.style.display = "block";
    confirmWithdrawBtn.style.display = "block";
    withdrawBtn.disabled = true;
});
confirmWithdrawBtn.addEventListener("click", () => {
    let withdrawValue = Number(withdrawInput.value);
    if (withdrawValue > balance) {
        insufficientFundsText.textContent = "Insufficient Funds";
        withdraw.append(insufficientFundsText);
    }else {
        let currentBalance = balance - withdrawValue;
        balance = currentBalance;
        currentBalanceText.textContent = balance;
        currentBalanceText.textContent = (`Your current balance is $${balance}`);
        insufficientFundsText.textContent = "";
        withdrawBtn.disabled = false;
    }
    const li = document.createElement("li");
    if (insufficientFundsText.textContent === "Insufficient Funds") {
        return "";
    }else {
        li.textContent = `Withdrew:$ ${withdrawValue}`;
        transactionList.append(li)
    }
    withdrawInput.value = "";
    withdrawInput.focus();
    showBalance.textContent = balance;
    mainBalance.append(showBalance);
});
