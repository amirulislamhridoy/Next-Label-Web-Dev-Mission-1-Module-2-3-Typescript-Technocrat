// static in class

class Bank2{
    public name:string = 'City Bank';
    static address:string = 'Uttara'
    constructor(name:string,){
        this.name = name
    }
    static getAddress(address:string){
        this.address = address
        console.log(this.address)
    }
}

// const address = Bank2.address
// Bank2.getAddress('Dhaka')
// console.log(address)

// const banks = new Bank2('bd bank')
// const an = banks.address //It will  give an error because this is static
// console.log(an)