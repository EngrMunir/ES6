const a = 56;
const numbers =[56, 7, 8]
const person ={
    name: 'sakib khan'
}

const message =`Hi, ${person.name} has a ${a} access to ${numbers[2]}`
// console.log(message);

// data access
const data =[{id: 1, name:'abul', address:'ctg'}]
// console.log(data[0].address)

const products ={
    count:5000,
    data:[
        {id:1, name:'lenovo laptop', price:6000},
        {id:2, name:'Hp laptop', price:36000},
    ]
}

console.log(products.data[1].price)

const user = {
    id: 5001,
    name:"damrai foll",
    address:{
        street:{
            first:'54/1 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        },
        city: 'Dhaka',
    }
}

console.log(user.address.street.third)