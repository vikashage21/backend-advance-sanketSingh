function inputRangeControl() {
    document.getElementById('rangeAmount').innerText = "loan amount ₨ " + document.getElementById('inputAmount').value
}

function rateAmountChange() {
    document.getElementById('interestAmount').innerText = "interest rate % " + document.getElementById('interestRate').value
}

function loanTenureController() {

    document.getElementById('loanTenureYears').innerText = "loan tenure " + document.getElementById('loanTenure').value + "years"

}


function emiCalculateController() {
    let p = parseInt(document.getElementById('inputAmount').value)
    let r = parseFloat(document.getElementById('interestRate').value) / (12 * 100);
    let n = parseInt(document.getElementById('loanTenure').value) * 12
    let emi = (p * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1);
    document.getElementById('result').innerHTML = ` <span >  your monthly emi is<b class="text-primary">  ₹   ${Math.round(emi)} </b>.</span>`
}