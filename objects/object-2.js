// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Hari"
tinderUser.isLoggedIn = true


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sam",
            lastname: "Altman" 

        }
    }
}


// console.log(tinderUser)

// console.log(regularUser.fullname.userfullname.firstname + " " + regularUser.fullname.userfullname.lastname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "b"
}

// const obj3 = {obj1, obj2} // it assigns the parameters as key and their stored value becomes the values
//  const obj3 = Object.assign({}, obj1, obj2)

// spread operator
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const db = [
    {
        id: 1,
        mail: "N@gmail.com",
    },
    {
        id: 1,
        mail: "N@gmail.com",
    },
    {
        id: 1,
        mail: "N@gmail.com",
    }
]


console.log(db[1].mail)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty("isLoggedIn"))

