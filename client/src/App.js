import React from "react"
import "./App.css"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

const code = new URLSearchParams(window.location.search).get("code")
localStorage.setItem("code", code)

function App() {
  return (
    <div className="App">{code ? <Dashboard code={code} /> : <Login />}</div>
  )
}

export default App
