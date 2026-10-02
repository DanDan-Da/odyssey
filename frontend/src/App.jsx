import { planets } from './data/planets.js'

//The Application
function App() {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: '8px 16px' }}>
      {planets.map(planet => (
        <li key={planet.id}>{planet.symbol} {planet.name}</li>
      ))}
    </ul>
  )
}

export default App
