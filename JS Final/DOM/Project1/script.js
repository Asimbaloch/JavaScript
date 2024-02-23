let istatus=document.querySelector('#status')

let btn=document.querySelector('#btn')

let check=0

btn.addEventListener('click', function() {
    if (check ==0) {
        istatus.innerHTML='Friends';
        istatus.style.color='green'
        btn.innerHTML='Remove Friend'
        check=1
    }

    else {
        istatus.innerHTML='Strangers';
        istatus.style.color='red'
        btn.innerHTML='Add Friend'
        check=0
    }


    
})