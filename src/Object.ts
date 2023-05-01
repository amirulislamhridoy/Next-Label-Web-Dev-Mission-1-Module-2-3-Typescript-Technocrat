// literal types, Object value, Optional type

const user: {
    company: "pHeor"; readonly name: string; age: number; isMarried: boolean, wife?: string
} = {
    company: "pHeor",
    name: 'montu',
    age: 20,
    isMarried: false,
    wife: 'Bou'
}

// user.company = 'web apic' // it will give an error because type is pHero
// user.name = 'montu bd' // it will give an error because this property is readonly property