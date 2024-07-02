import Button from '../../Buttons/Button'
import './FormFooter.css'

export default function FormFooter(){
    return(
        <form className='FormFooter'>
            <input placeholder='Введите ваш E-mail адрес' className='FormFooterInput'></input>
            <Button className='FormFooterButton'>ПОДПИСАТЬСЯ</Button>
        </form>
    )
}