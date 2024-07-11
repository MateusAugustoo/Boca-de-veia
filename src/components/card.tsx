import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import style from './card.module.css'
import { ConstosProps as CardProps } from '../interface/contosI'


export const Card = ({ category, message, time }: CardProps) => {

  const publishDate = time.toDate()
  const formattedDate = formatDistanceToNow(publishDate, {addSuffix:true, locale:ptBR})

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
        <small>{formattedDate}</small>
      </div>
    </div>
  );
}
