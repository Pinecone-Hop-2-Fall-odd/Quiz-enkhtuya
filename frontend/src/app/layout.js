'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const UserDataContext = createContext({});

const metadata = {
  title: 'Quiz:0',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  const router = useRouter();
  const [token, setToken] = useState(false);
  const [username, setUsername] = useState(null);

  const checkToken = async () => {
    try {
      if (window) {
        const localToken = localStorage.getItem("token");
        if (localToken === null) {
          return router.push('/login')
        } else {
          setToken(localToken);
          if (localToken) {
            const { data } = await axios.get(`http://localhost:8000/currentUser`, { headers: { "token": localToken } })
            setUsername(data.data.username);
          }
        }
      }
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <html lang="en">
      <body>
        <UserDataContext.Provider value={{ token, username }}>{children}</UserDataContext.Provider>
      </body>
    </html>
  )
}
