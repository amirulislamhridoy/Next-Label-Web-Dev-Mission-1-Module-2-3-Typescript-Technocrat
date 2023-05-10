// generic function
// arrow functin 

const createArray = <T>(param: T): T[]=>{
    return [param]
}
const result1 = createArray<string>('Bangladesh')
const result2 = createArray<boolean>(true)
type Name = {name: string}
const result3 = createArray<Name>({name: 'Bangladesh'})