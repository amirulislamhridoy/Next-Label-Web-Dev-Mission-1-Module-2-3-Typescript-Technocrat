// advanced
// props interface/type & method interface/type combine then use for class.

type Model<UName,UMethod>= {
    props: UName,
    method: UMethod
}
// props
interface Props {
    name: string;
}
// methods
interface Method{
    getName: () => string;
}

type model = Model<Props, Method>

class Test implements model {
    props: Props;
    method: Method;
    constructor(name:string){
        this.props = {
            name: name
        }
        this.method = {
            getName(){
                return `This name is ${name}`
            }
        }
    }
}

const test = new Test('Hridoy')
console.log(test.props.name)
console.log(test.method.getName())