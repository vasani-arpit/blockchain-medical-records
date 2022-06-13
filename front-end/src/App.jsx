import { useState, useEffect } from 'react'
import logo from './logo.svg'
import useIpfsFactory from './hooks/use-ipfs-factory.js'
import useIpfs from './hooks/use-ipfs.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { ipfs, ipfsInitError } = useIpfsFactory({ commands: ['id'] })
  const id = useIpfs(ipfs, 'id')
  const [version, setVersion] = useState(null)

  useEffect(() => {
    if (!ipfs) return;

    const getVersion = async () => {
      const nodeId = await ipfs.version();
      setVersion(nodeId);
    }

    getVersion();
  }, [ipfs])

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
      </header>
      <main>
        {ipfsInitError && (
          <div className='bg-red pa3 mw7 center mv3 white'>
            Error: {ipfsInitError.message || ipfsInitError}
          </div>
        )}
        {(id || version) &&
            <section className='bg-snow mw7 center mt5'>
            <h1 className='f3 fw4 ma0 pv3 aqua montserrat tc' data-test='title'>Connected to IPFS</h1>
            <div className='pa4'>
              {id && <IpfsId obj={id} keys={['id', 'agentVersion']}/>}
              {version && <IpfsId obj={version} keys={['version']}/>}
            </div>
          </section>
        }
      </main>
    </div>
  )
}

const Title = ({ children }) => {
  return (
    <h2 className='f5 ma0 pb2 aqua fw4 montserrat'>{children}</h2>
  )
}

const IpfsId = ({keys, obj}) => {
  if (!obj || !keys || keys.length === 0) return null
  return (
    <>
      {keys?.map((key) => (
        <div className='mb4' key={key}>
          <Title>{key}</Title>
          <div className='bg-white pa2 br2 truncate monospace' data-test={key}>{obj[key]}</div>
        </div>
      ))}
    </>
  )
}

export default App
