// null, unknown, never

// null
// "strictNullChecks": false //(It don't check null in typescript)
function getData(data: string | null){
    if(data === null){
        console.log('null is present')
    }else{
        console.log('data is positive')
    }
}
getData(null)
getData('sss')

// unknown
const checkUnknown = (data: unknown) => {
    console.log(typeof data)
}
checkUnknown(2)
checkUnknown('a')

// nerver
function returnKorena(message: string): never{
    throw new Error(message)
}
returnKorena('kohonoi return koren na')