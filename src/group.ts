import { Monoid } from "./monoid"

export type Group<A> = Monoid<A> & {
  inverse: (x: A) => A
}

const Sum : Group<number> = {
  concat: (x: number, y: number) => x + y,
  empty: 0,
  inverse: (x: number) => -1*x
}

const Product : Group<number> = {
  empty: 1,
  concat: (x: number, y: number) => x * y,
  inverse: (x: number) => 1/x
}