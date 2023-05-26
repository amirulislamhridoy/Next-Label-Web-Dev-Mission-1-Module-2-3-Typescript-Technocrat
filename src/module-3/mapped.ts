// Mapped types

type user = {
    name: string;
    roll: number
}
// type userNameType = user['name']
type userNewType = {
    // [key in keyof user]: string
    [key in keyof user]: user[key]
}

// normal array map use
const numOfArray = [1, 2,3,3,2]
const stringOfArray = numOfArray.map((n, i) => n?.toString())
// console.log(stringOfArray)
// normal array use
const obj = {name: 'hridoy', roll: 20}
const name5 = obj['name']
// console.log(name5)