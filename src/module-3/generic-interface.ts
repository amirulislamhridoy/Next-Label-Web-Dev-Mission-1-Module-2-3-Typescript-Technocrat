// generic interface, default paramter in generic

interface GenericInterface<N, T>{
    name: N, hasband: T
}
const updatedUser:GenericInterface<string, boolean> = {name: 'my name', hasband: false}

// object & array mix
interface GenericInterfaceFriend<n, a = number, o = object> {
    name: n, age: a,
    relative: o
}
interface relativeType{
    names: string[], 
    manyPeople: boolean
}
const friend:GenericInterfaceFriend<string,number, relativeType > = {
    name: 'hro',
    age: 20,
    relative: {
        names: ['s', 's','er'],
        manyPeople: true
    }
}