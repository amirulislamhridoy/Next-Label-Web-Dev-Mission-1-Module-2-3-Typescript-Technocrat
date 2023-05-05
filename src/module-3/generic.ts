// generic type

// const names2:Array<string> = ['hakim', 'fahim', 'maruf']
// const rolls2:Array<number> = [1,2,3,5]

type GenericType<T> = Array<T>

const names2:GenericType<string> = ['hakim', 'omer', 'fahim']
const rolls2:GenericType<number> = [2,3,5,3]

type GenericType2<O,N> = [O,N]
interface RelationObjectType {name:string, single:boolean}
// const myData:GenericType2<object, string> = [{name: 'ss', single: false}, 'Srity']
const myData:GenericType2<RelationObjectType, string> = [{name: 'ss', single: false}, 'Srity']