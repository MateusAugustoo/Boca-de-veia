import { useForm } from 'react-hook-form'
import style from './write.module.css'
import { db } from '../../firebase/firebase.connect';
import { addDoc, collection } from 'firebase/firestore';

export const Write = () => {

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    try {
      await addDoc(collection(db, 'contos'), {
        ...data,
        time: new Date()
      })
      reset()
      alert('Mensagem enviada com sucesso!')
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form__container}>
      <div className={style.from__group}>
        <label htmlFor="category">Tipo</label>
        <select {...register('category')} name="category" id='category'>
          <option value="null" defaultValue={'select'}>Selecione o Tipo</option>
          <option value="Mensagem">Mensagem</option>
          <option value="Denuncia">Denuncia</option>
          <option value="Sugestão">Sugestão</option>
          <option value="Fofoca">Fofoca</option>
        </select>
      </div>

      <div className={style.from__group}>
        <label htmlFor='message'>Mensagem</label>
        <input 
          {...register('message')} placeholder='Mensagem' id='message'/>
      </div>

      <button type='submit'>Enviar</button>
    </form>
  )
}