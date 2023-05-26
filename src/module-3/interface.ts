// interface, type alias, type-&, interface-extends (in function, array, )

// interface
interface User {
    name: string; roll?: number
}
const user2: User = {
    name: 's'
}
type userType = {
    name: string
}
const user3: userType = { name: 'erer' }

// extends 
interface entendInterface extends User {
    marrid: boolean
}
type extendTypeAlias = {
    marrid: boolean
} & userType
const user4: entendInterface = {
    name: 'hridoy', marrid: false
}
const user5: extendTypeAlias = {
    name: 'hr', marrid: false
}

// interface & type alias in function
interface addInterface {
    (num1: number, num2: number): number
}
type addType = (num1: number, num2:number) => number
// const add2 = (num1:number, num2:number):number => num1 + num2
// const add2: addInterface = (num1, num2) => num1 + num2
const add2:addType = (num1, num2) => num1 + num2

// interface type in array
type arrayType = number[]
interface interfaceType{
    [index: number]: string
}
// const number2:number[] = [1,3,2,3]
const number2:arrayType = [1,3,2,3]
