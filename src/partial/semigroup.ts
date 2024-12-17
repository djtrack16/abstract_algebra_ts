import { Option, Applicative, some } from 'fp-ts/lib/Option'

export type Semigroup<a> = {
  timesMaybe: (x: a, y: a) => Option<a>
}

function timesMaybe<a>(b: number, c: number): Option<number> {
  return some(b+c)
}
