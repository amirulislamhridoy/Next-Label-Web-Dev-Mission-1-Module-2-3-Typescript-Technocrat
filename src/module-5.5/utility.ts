// utility types
type Obj = {
    name: string;
    age?:number;
    email: string;
}

// Partial
type pertialType = Partial<Obj>
// type pertialType = {name?:stiring;age?:number;email?:string};

// Required
type requiredType = Required<Obj>
// type requiredType={name:string;age:number;email:string;};

// Record
type recordType = Record<string,string>;
// Record<string, number> is equivalent to { [key: string]: number }
const az:recordType = {
    name:'hridoy',
    // age:20 //number will give an error
}

// Omit
type omitType = Omit<Obj,'name'|'age'>

// Pick
type pickType = Pick<Obj, 'name'|"age">

// return type
// ReturnType extracts the return type of a function type.
// এইটা function এর মত type লিখে পরে object এর type এ পরিবর্তন করে। যা object লিখার জন্য কাজ করে।
type PointGenerator = () => {
    x:number; 
    y:number;
}
const point:ReturnType<PointGenerator> = {
    x:10,
    y:2
}

// parameters
// Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p:{x:number;y:string;}) =>void;
const point2: Parameters<PointPrinter>[0] = {
    x:2,
    y:'34'
}