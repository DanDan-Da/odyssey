import { useEffect, useRef } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { planets } from './data/planets.js'

// Vite
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
// Web worker for map processing.
maplibregl.setWorkerUrl(workerUrl)


// Style object, a raster source (satellite tiles) drawn as one layer, shown on a globe.
// {z}/{x}/{y} in the URL is the tile address: zoom level, column, row.
// Esri puts them in z/y/x order, so {y} comes before {x}.
const satelliteStyle = {
  version: 8,
  projection: { type: 'globe' },
  sources: {
    satellite: {
      type: 'raster',
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution: 'Tiles © Esri, Maxar, Earthstar Geographics',
    },
  },
  layers: [{ id: 'satellite', type: 'raster', source: 'satellite' }],
}

//The Application
function App() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    // Creates the map in the div, and keep it in the ref.
    mapRef.current = new maplibregl.Map({
      //Container puts the map inside the HTML element referenced by containerRef.
      container: containerRef.current,
      style: satelliteStyle,
      center: [-30, 20], // [longitude, latitude] - Atlantic, away from Turku
      zoom: 1.5, // Whole planet in view.
    })

    return () => {
      // When unamounted, the map will be removed.
      mapRef.current.remove()
    }
  }, [])

  const flyToTurku = () => {
    // Camera Movement
    mapRef.current.flyTo({ center: [22.27, 60.45], zoom: 13, duration: 8000 }) // City level
  }

  return (
    <>
      {/* The earth! */}
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
      <button
        onClick={flyToTurku}
        style={{ position: 'absolute', top: 10, left: 10 }}
      >
        Fly to Turku
      </button>
      <ul style={{ position: 'absolute', top: 10, right: 10, margin: 0, padding: '8px 16px', background: 'rgba(255,255,255,0.85)', listStyle: 'none' }}>
        {planets.map(planet => (
          <li key={planet.id}>{planet.symbol} {planet.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
