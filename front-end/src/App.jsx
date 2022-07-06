// FIXME: uncomment the following and everything goes to SHIT
// import { create } from 'ipfs-core'
// import { WebSockets } from '@libp2p/websockets'
// import * as filters from '@libp2p/websockets/filters'

// import all from 'it-all'
// import { concat as uint8ArrayConcat } from 'uint8arrays/concat'
// import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
// import { toString as uint8ArrayToString } from 'uint8arrays/to-string'


import { useState } from 'react'
import logo from './logo.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App