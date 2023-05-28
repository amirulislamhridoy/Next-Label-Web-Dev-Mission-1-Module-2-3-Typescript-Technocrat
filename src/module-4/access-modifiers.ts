// access modifires => Public, Private, Protected

class Family{
    public father: string = 'Md Abdul Haque Howlader'
    private _mother: string;
    protected _balance: number = 2000

    constructor( mother:string){
        this._mother = mother
    }
    familyFn(){
        console.log('this is our family class')
    }
}

const family = new Family('Taslima Begum')
// family._mother = '2' // It will give an error because mother property in Family is private
// console.log(family)

class Son extends Family{
    // constructor(mother:string){
    //     super(mother)
    // }
    test(balance:number){
        this._balance = balance
    }
}
const son = new Son('Taslima')
son.test(5000)
console.log(son)