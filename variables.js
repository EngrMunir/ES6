// const money = 50;

// console.log(money);
// const rich = money+50;
// console.log(rich);
// console.log(money);

let money = 50;
console.log(money);
money=63;
console.log(money);

function add(num1, num2=5){
    const result= num1+num2;
    return result;
}

const res1 = add(50,23);
console.log(res1);

const res2= add(50);
console.log(res2);

const res3= add(60,2)
console.log(res3);
const res4= add(60,7)
console.log(res4);

// backtick
const a=20;
const b=56;
const c= 54;

const result = a+'and'+b+'and'+c;
console.log(result);
const result2 =`${a} and ${b} and ${c}`;
console.log(result2);

// arrow function
function add(b,b){
    result= a+b;
    return result;
}

// 