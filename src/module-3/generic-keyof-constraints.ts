// generic keyof constraints

type User2 = {
    name: string;
    roll: number;
    class: string
}
type newType = "name" | "roll" | 'class'
type keyofType = keyof User2
const aa: newType = 'name'
const bb: keyofType = 'name'


type keyofObjectType ={
    name: string; roll: number
}
function userPropertyFn<X,Y extends keyof X>(obj: X,key: Y): X[Y]{
    return obj[key]
}
// const user8 = userPropertyFn<keyofObjectType, keyof keyofObjectType>({name: 'hridoy', roll: 20}, 'name')
const user8 = userPropertyFn({name: 'hridoy', roll: 20}, 'name')