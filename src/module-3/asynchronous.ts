// asynchoronous typescript

function checkAsyncronous(): Promise<string> {
    return new Promise<string>((resolve, rejected) => {
        const data = 'hello sir';
        if (data) {
            resolve('yes')
        } else {
            rejected('no')
        }
    })
}
const checkAsyncronous2 = async () => {
    return await checkAsyncronous()
}
checkAsyncronous2()

const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return data
}
const getTodoData = async (): Promise<void> => {
    await getTodo()
}
getTodoData()