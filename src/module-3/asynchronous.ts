// asynchronous

function asynchronousFunction(): Promise<string>{
        return new Promise<string>((resolve, rejected) =>{
            const data = 'data is string';
            if(data){
                resolve('data is true')
            }else{
                rejected(false)
            }
        })
}

const d3 = async() => {
    const a3 = await asynchronousFunction()
    console.log(a3)
}
d3()