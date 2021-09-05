import { Left, Either, identity } from "purify-ts"
import { useDitto } from "./ditto"

export default function Root(props) {
  const ditto = useDitto()
  return (
    <div style={{ width: "100%", backgroundColor: "coral" }}>
      {ditto.caseOf({
        Left: (error) => <p>{error}</p>,
        Right: (ditto) => (
          <pre>
            <code>{JSON.stringify(ditto)}</code>
          </pre>
        ),
      })}
    </div>
  )
}
