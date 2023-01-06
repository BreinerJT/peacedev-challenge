import { getSession } from "next-auth/react"
import { useEffect, useState } from "react"

interface User {
  email: string | null
  image: string | null
  name: string | null
}

export const useAuth = () => {
  const [user, setUser] = useState<User>({
    email: null,
    image: null,
    name: null
  })

  const getStoreSession = async () => {
    const session = await getSession()

    if ( session ) {
      setUser({
        email: session.user?.email!,
        image: session.user?.image!,
        name: session.user?.name!
      })
    }
  }

  useEffect(() => {
    getStoreSession()
  }, [])
  

  return {
    user
  }
}