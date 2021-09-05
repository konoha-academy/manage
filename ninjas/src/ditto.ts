import {
  Codec,
  Either,
  EitherAsync,
  GetType,
  Left,
  number,
  string,
} from "purify-ts"
import { useState } from "react"
import { useEffect } from "react"

const Ditto = Codec.interface({
  id: number,
  name: string,
  weight: number,
})

type Ditto = GetType<typeof Ditto>

const fetchDitto = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => res.json())

const validateDitto = (payload: unknown) =>
  EitherAsync.liftEither(Ditto.decode(payload))

const getDitto = () =>
  EitherAsync(fetchDitto)
    .chain(validateDitto)
    .mapLeft((e) => String(e))

export const useDitto = () => {
  const [state, setState] = useState<Either<string, Ditto>>(() =>
    Left("loading")
  )
  useEffect(() => {
    getDitto()
      .run()
      .then((either) => {
        console.log(either)
        setState(either)
      })
  }, [])

  return state
}
