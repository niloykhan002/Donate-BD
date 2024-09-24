function getInputValueByID(id){
    const inputField = document.getElementById(id).value;
    inputFieldNumber = parseFloat(inputField);
    return inputFieldNumber;
}
function getTextValueByID(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}
function getClickedValueByID(id){
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}