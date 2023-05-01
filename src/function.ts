function addFn(num1:number, num2: number):number{
    return num1 + num2
}
addFn(2, 2)

const addArrow = (num1:number, num2:number):void => console.log('hello')

const asikPary: {name: string; cost: number, costFn: (money: number) => any} = {
    name: "Asik",
    cost: 500,
    costFn: function(money: number){
        console.log(`your cost ${this.cost + money}`)
    }
}

const asikParyCost = asikPary.costFn

asikParyCost(400)
