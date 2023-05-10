// generic constraints (constraints মানে force করা)

interface MyInfoInterface {
    name: string, age: number, salary: number, other?: boolean
}
type MyInfoType = {
    name: string;
    age: number;
    salary: number; 
    // other: boolean;
}
const addMeInMyMind =<T extends MyInfoType> (myInfo: T) => {
    const crash = 'Srity is my crash'
    const data = {...myInfo, crash}
    return data
}
const myInfo: MyInfoInterface = {
    name: 'Persian', age: 20, salary: 10000000
}
addMeInMyMind<MyInfoInterface>(myInfo)