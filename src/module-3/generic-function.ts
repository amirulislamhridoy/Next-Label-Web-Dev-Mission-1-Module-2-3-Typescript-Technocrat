// generic function
// arrow functin 

const createArray = <T, Y>(param: T, param2:Y): (T|Y)[]=>{
    return [param, param2]
}
// const result1 = createArray<string>('Bangladesh')
// const result2 = createArray<boolean>(true)
type Name = {name: string}
const result3 = createArray<Name, boolean>({name: 'Bangladesh'}, true) 

// spread opperator using
//(jodi ami hover kori taile ami return type dekte parbo) : T & {crash: string;}
function addMeInMind<T>(myInfo: T){
    const crash = 'my crash'
    const data = {...myInfo, crash}
    return data
}
interface My {name: string, age: number, roll: number}
const my2: My = {name: 'hridoy', age: 23, roll: 74}
const my3 = addMeInMind(my2)
// my3.