const subscribe=document.getElementById('subscribe');
const visaBtn=document.getElementById('visaBtn');
const MasterBtn=document.getElementById('MasterBtn');
const paypalBtn=document.getElementById('paypalBtn');
const submit=document.getElementById('submit');
const sub=document.getElementById('sub');
const cardinfo=document.getElementById('cardinfo');

submit.onclick =function () {
    if (subscribe.checked) {
        sub.innerText = `You are subscribed.`
    }

    else {
        sub.innerText =`You are not subscribed`
    }
    
    if (visaBtn.checked) {
        cardinfo.innerText = `You are paying through Visa Card.`
    }

    else if (MasterBtn.checked) {
        cardinfo.innerText = `You are paying through Master Card.`
    }

    else if (paypalBtn.checked) {
        cardinfo.innerText = `You are paying through Paypal.`
    }

    else 
    { cardinfo.innerText= `You did not selected any payment type.`}
}