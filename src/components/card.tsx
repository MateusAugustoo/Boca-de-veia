import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import style from './card.module.css'

interface CardProps {
  category: string
  content: string
  time: Date
}

export const Card = ({ category, content, time }: CardProps) => {

  const published = time.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })
  const publishedDateRelativeToNow = formatDistanceToNow(time, { addSuffix: true, locale: ptBR })

  const iconMap: Record<string, string> = {
    mensagem: '✉️',
    denuncia: '⚠️',
    sugestao: '💡',
    fofoca: '🤔',
  }

  const colorMap: Record<string, string> = {
    mensagem: 'message',
    denuncia: 'warning',
    sugestao: 'suggestion',
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
        <p>{content}</p>
        <time
          title={published}
          dateTime={time.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </div>
    </div>
  );
}
