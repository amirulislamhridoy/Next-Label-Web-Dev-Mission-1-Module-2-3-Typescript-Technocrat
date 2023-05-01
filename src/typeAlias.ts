// type alias

type Crash = {
    name: string, profession?: string, isMarrid: boolean
}
const crash: Crash = { name: "Srity", isMarrid: false }



type operationType = (x: number, y: number) => number

const cal = (n1:number, n2:number, operation: operationType)  =>{
    return operation(n1, n2);
}