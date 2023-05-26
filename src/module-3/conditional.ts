// conditional (use type strite) // nerver union type থেকে ঐ type কে বাদ দিয়ে দেয়

type a1 = string;
type a2 = number
type a3 = boolean;
type a5 = a1 extends number ? number : never
type a4 = a1 extends number ? number : a2 extends string ? string : a3 extends boolean ? boolean : null

// nerver union type থেকে ঐ type কে বাদ দিয়ে দেয়

type Bandubi = "Monica" | "Shopna" | "Nadia"
type RemoveBandobi<T, K> = T extends K ? never : T
type a = RemoveBandobi<Bandubi, "Monica">