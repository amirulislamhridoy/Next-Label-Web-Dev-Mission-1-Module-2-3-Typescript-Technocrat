// inheritance

class Student{
    name: string = '';
    address: string;
    age: number;

    constructor(name: string, address: string, age: number){
        this.name = name
        this.age = age
        this.address = address
    }
    maekSleep(hours: number): string{
        return `This ${this.name} will sleep for ${hours}`
    }
    takeClass(numberOfClass: number):string{
        return `This ${this.name} will take ${numberOfClass} classes`
    }
}
const mahim = new Student('Mahim', 'Haydarabad', 2)
// console.log(mahim.maekSleep(20))

class Boy extends Student{
    nickName: string;
    constructor(name: string, address: string, age: number, nickNameTT: string){
        super(name, address, age)
        this.nickName = nickNameTT
    }
}
const fahim = new Boy('Fahim', 'haydarabad', 20, 'Fahim')