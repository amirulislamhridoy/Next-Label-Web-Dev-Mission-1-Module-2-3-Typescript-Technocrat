// spread operator, rest operator, default parameter

// spread operator
const boyfriends: string[] = ['kasem', 'monir', 'ruhul']
const girlFriends: string[] = ['sadia', 'fahima', 'monica']
boyfriends.push(...girlFriends)

// rest operator
const nameFunction = (...names:string[]) => {
    console.log(names)
}

// default parameter
const add = (num1:number, num2:number = 10) => {}