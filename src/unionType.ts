// union type, intersection, enum

// union types
let my: string | number = 'hridoy'
my = 20

// intersection
type name = {name: string}
type roll = {roll: number}
const check: name & roll & {honest: boolean} = {
    name: 'hello', roll: 20, honest: true
}

// enum // I con't understand enum
// enum serial {
//     first = 'first',
//     second = 'second',
//     third = 5
// }
