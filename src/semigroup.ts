import { Magma } from "./magma"

export type Semigroup<a> = Magma<a> & {
}

const Sum : Semigroup<number> = {
  concat: (x: number, y: number) => x + y
}

const Product : Semigroup<number> = {
  concat: (x: number, y: number) => x * y
}