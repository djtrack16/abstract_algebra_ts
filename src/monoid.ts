import { Semigroup } from "./semigroup"

export type Monoid<a> = Semigroup<a> & {
  empty: a
}
/*
const stringConcat : Monoid<string> = {
  empty: ""
}
*/
const Sum : Monoid<number> = {
  concat: (x: number, y: number) => x + y,
  empty: 0
}

const Product : Monoid<number> = {
  concat: (x: number, y: number) => x * y,
  empty: 1
}

//var result = stringConcat.concat("", stringConcat.empty)