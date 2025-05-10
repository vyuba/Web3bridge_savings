// import { BrowserRouter } from "react-router";
import { useState } from "react"
import Auth from "./page/Auth"
import Dashboard from "./page/Dashboard"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Auth isLogged={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Dashboard isLogged={isLoggedIn} />
    </>
  )
}

export default App


