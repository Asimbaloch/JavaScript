let voterAge=document.getElementById('voterAge');
let submit=document.getElementById('submit')
let result=document.getElementById('result');

submit.onclick =function (){

    let age = Number(voterAge.value);
    if (age>=18) {
        result.textContent ='You are eligible for vote.';
    }

    else{
        result.textContent ='You are not eligible for vote.';
    }

}