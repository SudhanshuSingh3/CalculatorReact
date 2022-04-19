import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//import Calculate from './calculate'
import Calculatef from './calculateF'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Calculate /> */}
      <Calculatef/>

      
    </div>
  )
}

export default App
