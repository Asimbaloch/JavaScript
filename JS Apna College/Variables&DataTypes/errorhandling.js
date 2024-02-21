//Error Handling

setTimeout(() => {
    console.log('checking')
}, 1000
)

try {
    console.log (ch)
} catch (error) {
    console.log('issue')
}

setTimeout(() => {
    console.log('checking part 2')
}, 2000
)

setTimeout(() => {
    console.log('checking part 3')
}, 4000
)


//add sum and error handling

let addTwoNum= (a,b) => {

    try {
                if (typeof(a)!=number) {
                    throw new ReferenceError('the typeof is not number')
                }
                else if (typeof(b)!=number) {
                    throw new ReferenceError('the typeof is not number')
                }
            } catch (error) {
                console.log ('check')
            }}

            addTwoNum(5,'55')