import { signIn } from "../firebase/setup"
import { useEffect } from "react"

export function useAuth() {
  useEffect(() => {
    console.log("Authenticating client...")
    const auth = async () => await signIn()
    auth()
      .then(() => console.log("Client signed in"))
      .catch((err) => console.error("Client sign in error", err))
  }, [])
}
