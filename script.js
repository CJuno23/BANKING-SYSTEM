const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".withdraw-btn");
let balance = 0;
depositBtn.addEventListener("click", () => {
    let depositInput = document.querySelector(".deposit-input");
    let depositLabel = document.querySelector(".label-deposit");
    depositInput.style.display = "block";
    depositLabel.style.display = "block";
    balance = Number(depositInput.value);
    console.log(balance);
});
withdrawBtn.addEventListener("click", () => {
    let withdrawInput = document.querySelector(".withdraw-input");
    let withdrawLabel = document.querySelector(".label-withdraw");
    withdrawLabel.style.display = "block";
    withdrawInput.style.display = "block";
    let withdrawValue = withdrawInput.value;
    if (withdrawValue > balance) {
        console.log("tite");
    }else {
        let currentBalance = balance - withdrawValue;
        balance = currentBalance;
        console.log(`Withdraw successfully. Your current balance is ${balance}`);
    }


});