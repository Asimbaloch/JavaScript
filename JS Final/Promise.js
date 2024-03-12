let promiseToy = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve('You will get the toy.');
    } else {
        reject('You will not get the toy.');
    }
});

promiseToy.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
