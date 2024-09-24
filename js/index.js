    // Card-1-----
document.getElementById('btn-card1').addEventListener('click', function(){
    const balance = getTextValueByID('balance');
    const fund = getTextValueByID('card1-fund') ;
    const amount = getInputValueByID('card1-amount');

    if(isNaN(amount)){
        alert('Please enter amount')
        return
    }

    if(amount > balance || amount <= 0 ){
        alert('Invalid Input');
    }
    else{
        const totalFund = fund + amount
        const totalBalance = balance - amount
        document.getElementById('card1-fund').innerText = totalFund
        document.getElementById('balance').innerText = totalBalance
        const div = document.createElement('div');
        div.classList.add('p-5')
        div.classList.add('border')
        div.classList.add('rounded-lg')
        div.innerHTML = `
        <p class= "font-bold text-xl">${amount} Taka is Donated for Flood Relief in Noakhali, Bangladesh</p>
        <p>${new Date()}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
        my_modal_5.showModal();
    }
})

//  Card-2-------
document.getElementById('btn-card2').addEventListener('click', function(){
    const balance = getTextValueByID('balance');
    const fund = getTextValueByID('card2-fund');
    const amount = getInputValueByID('card2-amount');

    if(isNaN(amount)){
        alert('Please Enter Amount')
        return;
    }

    if(amount > balance || amount <= 0){
        alert('Invalid Input')
    }
    else{
        const totalFund = fund + amount
        const totalBalance = balance - amount
        document.getElementById('card2-fund').innerText = totalFund;
        document.getElementById('balance').innerText = totalBalance;
        const div = document.createElement('div');
        div.classList.add('p-5')
        div.classList.add('border')
        div.classList.add('rounded-lg')
        div.innerHTML = `
        <p class= "font-bold text-xl">${amount} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
        <p>${new Date()}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
        my_modal_5.showModal();
    }
})

//  Card-3----
document.getElementById('btn-card3').addEventListener('click', function(){
    const balance = getTextValueByID('balance');
    const fund = getTextValueByID('card3-fund');
    const amount = getInputValueByID('card3-amount');

    if(isNaN(amount)){
        alert('Please Enter Amount');
        return
    }

    if(amount > balance || amount <= 0){
        alert('Invalid Input')
    }
    else{
        const totalFund = fund + amount;
        const totalBalance = balance - amount;
        document.getElementById('card3-fund').innerText = totalFund
        document.getElementById('balance').innerText = totalBalance
        const div = document.createElement('div');
        div.classList.add('p-5')
        div.classList.add('border')
        div.classList.add('rounded-lg')
        div.innerHTML = `
        <p class= "font-bold text-xl">${amount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p>${new Date()}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
        my_modal_5.showModal();
    }

})

// button--value--
document.getElementById('btn-donate').addEventListener('click', function(){
    getClickedValueByID('donate-container')
})
document.getElementById('btn-history').addEventListener('click', function(){
    getClickedValueByID('transaction-container')
})

// -->Blog---
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = './blog.html'
})