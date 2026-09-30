import { useEffect, useRef } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
// Vite
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
// Web worker for map processing.
maplibregl.setWorkerUrl(workerUrl)


//The Application
function App() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    // Creates the map in the div, and keep it in the ref.
    mapRef.current = new maplibregl.Map({
      //Container puts the map inside the HTML element referenced by containerRef.
      container: containerRef.current,
      style: 'https://demotiles.maplibre.org/globe.json',
      center: [22.27, 60.45], // [longitude, latitude]
      zoom: 4, // Starting Zoom for Earth.
    })

    return () => {
      // When unamounted, the map will be removed.
      mapRef.current.remove()
    }
  }, [])

  const flyToTurku = () => {
    // Camera Movement
    mapRef.current.flyTo({ center: [22.27, 60.45], zoom: 7 })
  }

  return (
    <>
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />  // The earth!
      <button
        onClick={flyToTurku}
        style={{ position: 'absolute', top: 10, left: 10 }}
      >
        Fly to Turku
      </button>
    </>
  )
}

export default App
