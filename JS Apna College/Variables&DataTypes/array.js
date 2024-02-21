//Array with numbers
let marks= [93,93,32,54,12]
console.log(marks)
console.log(marks.length) //length is property

marks[3]=44  //Numbers are mutable in the Array
console.log(marks)

//Array with string
let PM=["Nawaz Sharif","Imran Khan","Shahbaz Sharif"]
console.log(PM,"Length of the array is", PM.length)

console.log(PM[2]) //strings are not mutable/ immutable

//Looping over array

let cities=["Khanewal","Kabirwala","Jahanian","Mianchannu"]
for (let i=0;i<cities.length;i++) {
    console.log (i, cities[i])
}

// Getting Average

let mark=[22,44,39,55,22,44,55]
let sum=0;
for (let val of mark) {
    sum += val;
}
let avg=sum/mark.length;

console.log ('average marks are =',avg);

//Unshift and Push -- Unshift is used to add value in the start and Push is used to add value in the end and 
let companies=["Amazon","Google","IBM"]

companies.unshift("Coursera")
companies.push("Microsoft")

console.log(companies)

//shift and pop --shift is used to delete index 0 in the start in the array and pop is used to delete the last value in the array
let province=['Punjab','Balochistan','Sindh','KPK']
province.shift()
province.pop()

console.log(province)


//splice --It is used to delete the element from the array

let bigbull=[ 'Coursera', 'Amazon', 'Google', 'IBM', 'Microsoft' ]

bigbull.splice(1,1,'Ali Baba')
console.log (bigbull)


