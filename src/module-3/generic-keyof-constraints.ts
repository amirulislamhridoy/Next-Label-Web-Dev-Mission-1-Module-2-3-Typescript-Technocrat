// generic keyof constraint

type Obj = { name: string; roll: number; class: string }
type keyOfTypes = keyof Obj;

type objType = {name: string, roll: number}
// function getProperty<X, Y extends keyof X>(obj: objType, key: Y){
//     obj[key]
// }
// const b = getProperty({name: 'h', roll: 20}, 'roll')