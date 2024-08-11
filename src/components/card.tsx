import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import style from './card.module.css'
import { ConstosProps as CardProps } from '../interface/contosI'
import { ArrowBigUp } from 'lucide-react'
import { useState } from 'react'
import { doc, increment, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.connect'


export const Card = ({ id, category, message, time, like }: CardProps) => {

  const [likesCount, setLikesCount] = useState(like)
  const [hasLiked, setHasLiked] = useState<boolean>(false)

  const handleLike = async () => {
    try {
      const docRef = doc(db, 'contos', id)
      await updateDoc(docRef, {
        like: increment(1)
      })
      setLikesCount(likesCount! + 1)
      setHasLiked(!hasLiked)
    } catch (error) {
      console.error(error)
    }
  }

  const publishDate = time.toDate()
  const formattedDate = formatDistanceToNow(publishDate, { addSuffix: true, locale: ptBR })

  const iconMap: Record<string, string> = {
    mensagem: '✉️',
    denuncia: '⚠️',
    fofoca: '🤔',
  }

  const colorMap: Record<string, string> = {
    mensagem: 'message',
    denuncia: 'warning',
    fofoca: 'question',
  }
  const icon = iconMap[category]
  const color = colorMap[category]

  return (
    <div className={style.card}>
      <div className={style.card__header}>
        <p className={style.card__icon}>{icon}</p>
        <p
          className={`${style.card__category} ${style[color]}`}>
          {category}
        </p>
      </div>

      <div className={style.container__content}>
        <p>{message}</p>
        <div className={style.card__footer}>
          <small>{formattedDate}</small>
          <button onClick={handleLike} className={style.button__like}>
            <div className={style.card__footer__likes__container}>
              <span>{hasLiked ? <ArrowBigUp color='red' /> : <ArrowBigUp />}</span> <span>{likesCount}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
