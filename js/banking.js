document.getElementById('deposit-button').addEventListener('click', function () {

    // GET - THE - AMOUNT - DEPOSITED
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log('depositAmount');

    // UPDATE-DEPOSIT-TOTAL 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // depositInput.value = '';

    // UPDATE-ACCOUNT-BALANCE
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // CLEAR-THE-DEPOSIT-INPUT-FIELD 
    depositInput.value = '';
});
// WITHDRWA-PART
document.getElementById('withdraw-button').addEventListener('click', function () {
    //FOR-CHECKING
    // console.log('withdraw-clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);
    console.log(newWithdrawAmount);

    // SET-WITHDRAW-TOTAL 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // UPDATE-BALANCE 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // CLEAR-THE-WITHDRAW-INPUT-FIELD 
    withdrawInput.value = '';
})