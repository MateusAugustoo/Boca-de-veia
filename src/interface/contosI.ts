import firebase from "firebase/compat/app"

interface ConstosProps {
  id: string
  category: string
  message: string
  time: firebase.firestore.Timestamp
  like?: number
}

export type { ConstosProps}