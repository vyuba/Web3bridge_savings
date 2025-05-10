// import { BrowserRouter } from "react-router";
import { useState, useEffect } from "react"
import Auth from "./page/Auth"
import Dashboard from "./page/Dashboard"


export interface UserData {
  username: string,
  savingsPlan: {
    tier: string,
    balance: number,
    percentage: number
  }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)


  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])

  return (
    <>
      <Auth isLogged={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Dashboard userData={userData} isLogged={isLoggedIn} />
    </>
  )
}

export default App


