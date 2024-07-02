import Button from '../../../Buttons/Button'
import './Element5.css'

import present from './present.svg'

export default function Element5(){
    return(
        <>
            <p>Чтобы забронировать сеанс, пожалуйста, выполните вход в личный кабинет.</p>
            <p>Для зарегистрированных пользователей предусмотрена бонусная программа и накопительные скидки.</p>
            <div className='Element5Kod'>
                <h4 className='Element5KodTel'>Код отправлен на +79991234567</h4>
                <div className='Element5Div'>
                   <div style={{width:'48%'}}>
                        <p className='Element5Text Element5Text1'>КОД ДЛЯ ВХОДА В ЛИЧНЫЙ КАБИНЕТ</p>
                        <form>
                            <input type='text' className='Element5Form'></input>
                        </form>
                        <Button className='Element5Button'>ВОЙТИ</Button>
                        <p className='Element5Text'>УКАЗАЛИ НЕВЕРНЫЙ НОМЕР?</p>
                        <Button className='Element5Button Element5Button2'>ВВЕСТИ ЕЩЕ РАЗ</Button>
                    </div>
                    <div className='Element5Bonus'>
                        <img src={present} width='25%'></img>
                        <p className='Element5BonusText'>Получи</p>
                        <h3 className='Element5BonusText Element5BonusBall'>500</h3>
                        <p className='Element5BonusText'><b>бонусных баллов</b> за регистрацию!</p>
                    </div>
                </div>
            </div>
        </> 
    )
}