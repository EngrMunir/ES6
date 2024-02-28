// const money = 50;

// console.log(money);
// const rich = money+50;
// console.log(rich);
// console.log(money);

let money = 50;
// console.log(money);
money=63;
// console.log(money);

function add(num1, num2=5){
    const result= num1+num2;
    return result;
}

const res1 = add(50,23);
// console.log(res1);

const res2= add(50);
// console.log(res2);

const res3= add(60,2)
// console.log(res3);
const res4= add(60,7)
// console.log(res4);

// backtick
const a=20;
const b=56;
const c= 54;

const result = a+'and'+b+'and'+c;
// console.log(result);
const result2 =`${a} and ${b} and ${c}`;
// console.log(result2);

// arrow function
function add(a,b){
    const result= a+b;
    return result;
}

// console.log(add(5,3))
const add4 = function(a,b){
    return a+b;
}

// console.log(add4(20,31))

// const add3 = (a,b)=>a+b

// console.log(add3(42,8));

// destructuring
const glass = {
    price:500,
    color: 'gold',
    brand: 'china',
    phone:'01831013421'
}

// const price = glass.price;
// const color = glass.color;
// const brand = glass.brand;
// const phone = glass.phone;

// console.log(glass)
// console.log(glass.price)
// console.log(glass.color)
// console.log(glass.brand)
// console.log(glass.phone)

// object destructure

const {price, color, brand, phone}=glass;
// console.log(glass)
// console.log(price)
// console.log(color)
// console.log(brand)
// console.log(phone)

// array destructure
const numbers =[45, 99]
const [first, second]=numbers;
// console.log(first);
// console.log(second);

const [x,y]=[12, 66];

console.log(x);
console.log(y);

function doubleThem(a,b){
    return [a*2, b*2];
}

const [prothom, ditiyo]= doubleThem(6,9);
console.log(prothom, ditiyo);
