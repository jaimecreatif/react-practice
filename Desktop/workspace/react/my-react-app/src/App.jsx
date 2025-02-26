import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = "kim";
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("공부를 시작해 볼까?")

  return (
    <>
      <div>
        <h1>안녕하세요 {name} 님!</h1>
        <h1>리액트 공부 시작!</h1>
        <p>오늘 부터 30일 동안 열심히 공부해 볼까요?</p>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setMessage("열심히 공부중") }>{message}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
