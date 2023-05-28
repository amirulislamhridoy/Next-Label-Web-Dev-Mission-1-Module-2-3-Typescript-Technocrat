// getter, setter

class Bank{
    name:string = 'City Bank'
    constructor(name: string){
        this.name = name
    }
    // getter
    get getName(){
        return this.name
    }
    // setter 
    set setName(name: string){
        this.name = name
    }
}

const bank = new Bank('Bangladesh Bank')
const name4 = bank.getName
const setName = bank.setName = 'Agrany Bank'

console.log(setName)