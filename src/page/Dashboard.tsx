import { useEffect, useState } from "react"

interface UserData {
    username: string,
    role: string
}

const Dashboard = ({ isLogged }: {
    isLogged: boolean
}) => {

    const [userData, setUserData] = useState<UserData | null>(null)
    useEffect(() => {
        const storedUserData = localStorage.getItem('userData')
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData))
        }
    }, [])

    console.log(userData)
    return (
        <div className={`${isLogged ? 'flex' : 'hidden'}`}>
            <p className=''>Dashboard</p>
            <p>welcome {userData?.username}</p>
            <p>{userData?.role}</p>
        </div>
    )
}

export default Dashboard