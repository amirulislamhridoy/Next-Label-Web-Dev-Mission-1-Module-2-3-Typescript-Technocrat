// type-assertion (as)

let course:any;
course = 'next label web developer';
// (course as string).length

const kgToGram = (param: string | number): string | number | undefined => {
    if(typeof param === 'string'){
        return `This is string => ${param}`
    }else if(typeof param === 'number'){
        return param
    }
}
const string = kgToGram('s') as string;
const number = kgToGram(20) as number

type CustomError = {
    message: string
}
try{

}catch(error){
    console.log((error as CustomError).message)
}