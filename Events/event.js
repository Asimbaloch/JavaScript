let b1= document.querySelector('#b1') ;

b1.onclick = () => {
    
    console.log('button is clicked')
    let count =2;
    count++;
    console.log(count)
}

let box= document.querySelector('#box')
box.onmouseover=() => {
    console.log('You are in the box')
}