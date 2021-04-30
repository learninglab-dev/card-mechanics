/** @jsxImportSource theme-ui */
import { useParams } from 'react-router-dom'

export default function LaunchGame({ cards }) {
  const { deck } = useParams()
  console.log('here')

  return (
    <div>
      <p>here's the game</p>
      {JSON.stringify(cards)}
    </div>
  )
}
