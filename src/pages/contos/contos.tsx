import { useState, useEffect } from 'react'
import style from './contos.module.css'
import { ConstosProps } from '../../interface/contosI'
import { Card } from '../../components/card'

import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase/firebase.connect'

export const Contos = () => {

  const [contos, setContos] = useState<ConstosProps[]>([])
  useEffect(() => {
    const getContos = async () => {

      const q = query(collection(db, 'contos'), orderBy('time', 'desc'))
      const querySnapshot = await getDocs(q)

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as ConstosProps[]

      setContos(data)
    }

    getContos()
  }, [])


  return (
    <section className={style.container}>
      {contos.map((conto) => {
        return (
          <Card
            key={conto.id}
            category={conto.category}
            message={conto.message}
            time={conto.time}
          />
        )
      })}
    </section>
  )
}