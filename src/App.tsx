// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import UnderConstruction from './pages/UnderConstruction.tsx'
import MarriagePage from './pages/MarriagePage.tsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<UnderConstruction />} />
      <Route path="/marriage" element={<MarriagePage/>} />
    </Routes>
  </Router>


      // <div>
      //   <a href="https://vite.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      //   <a href="https://react.dev" target="_blank">
      //     <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a>
      // </div>
      // <h1>Vite + React</h1>
      // <div className="card">
      //   <button onClick={() => setCount((count) => count + 1)}>
      //     count is {count}
      //   </button>
      //   <p>
      //     Edit <code>src/App.tsx</code> and save to test HMR
      //   </p>
      // </div>
      // <p className="read-the-docs">
      //   Click the Vite and React logos to learn more
      // </p>

  )
}

export default App
