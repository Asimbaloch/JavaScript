const webUser= {
    username: 'Asim',
    password: '3259',

    greeting : function () {
        console.log(`Hello ${this.username}`)
        console.log(this);
    }

    
}

console.log(this)

console.log(webUser.greeting());

//Arrow function

const Arrow = () => {
    let username= 'Asim'
    console.log(username);
}

Arrow()


const add =(x,y) => {
    return x+y
}

console.log(add(3,4));