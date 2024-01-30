/*DataTypes in JavaScript : There are two types , Primitive and Non Primitive DataTypes.

Primitive Data Types in Javascript
1. String
2. Numbers
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol

Non Primitive Data Types in JS are :
Objects (Arrays and Functions)
*/

let fullname='Asim';
let age=23;
let isfollow=true;
let x=null;
let y= undefined;
let z=BigInt(12345678910)
let w=Symbol('alright!')

//Object

let student={
    class : 'BS' ,
    Department : 'Computer Science' ,
};

console.log(student)

console.log(student['class'])

const product= {
    title: 'Remote',
    Brand: 'Amazon',
    rating:4,
    price:355,
}

console.log(typeof product)

console.log(typeof product['rating'])