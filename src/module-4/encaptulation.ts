// encaptulation
class Family2{
    public father: string = 'Md Abdul Haque Howlader'
    private _mother: string;
    protected _balance: number = 2000

    constructor( mother:string){
        this._mother = mother
    }
    familyFn(){
        console.log('this is our family class')
    }

    /*******Encaptulation ********/
    private getBalance(){
        return this._balance
    }
    get getBalance2():number{
        return this.getBalance()
    }
}

const family2 = new Family2('Taslima Begum')
// family2._mother = '2' // It will give an error because mother property in Family is private
// console.log(family2)
console.log(family2.getBalance2)

class Son2 extends Family2{
    // constructor(mother:string){
    //     super(mother)
    // }
    test(balance:number){
        this._balance = balance
    }
}
// const son2 = new Son2('Taslima')
// son2.test(5000)
// console.log(son2)