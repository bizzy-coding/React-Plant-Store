import { useState } from 'react'
import './App.css'
import PlantShopPage from './components/PlantShopPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlantShopPage />
    </>
  )
}

export default App
