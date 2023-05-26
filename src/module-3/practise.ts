type az = {
    n: string; r: number
}

type us = {
    [index in keyof az]: az[index]
}