import { useState } from 'react'
import fon from './fonQ.svg'
import './Questions.css'
import telephone from './telephone.svg'
import FromQuestion from './FormQuestion'
import Button from '../Buttons/Button'

export default function Questions(){
    return(
        <div className='QuestionsMainDiv' id='kontakt'>
            <div className='QuestionsFon'>
                <img src={fon} width='50%'></img>
            </div>

            <div className='QuestionsDiv'>
                <div className='QuestionsTitleText'>
                    <h1 className='QuestionsTitle'>Остались вопросы?</h1>
                    <h5 className='QuestionsText'>Задайте вопрос нашему менеджеру Виктории</h5>

                    <div className='QuestionsTelephoneDiv'>
                        <h5 className='QuestionsTelephone'>Или позвоните по номеру</h5>
                        <h4><img src={telephone} width='13%' className='QuestionsImgTelephone'></img>+7 (499) 681-95-29</h4>
                    </div>
                </div>

                <div className='QuestionsFormTelephoneDiv'>
                    <h4 className='QuestionsFormTelephoneTitle'>Задать вопрос</h4>
                    
                    <FromQuestion className='QuestionsFormTelephone' placeholder='Телефон'></FromQuestion>
                    <FromQuestion className=' QuestionsFormTelephone QuestionsFormQuestion' placeholder='Ваш вопрос'></FromQuestion>
                            
                    <Button className='buttonForm' >ОТПРАВИТЬ</Button>
                    <p className='QuestionsCustoms'>Нажимая на кнопку вы соглашаетесь с <u>условиями пользовательского соглашения</u></p>
                </div>
            </div>
        </div>
    )
}
 {/*
    const [teleph, setTelephone] = useState('')
    const [question, setQuestion] = useState('')

    function send(){
        setTelephone('')
        setQuestion('')
    }

    
    value={teleph} onChange={(event) => setTelephone(event.target.value)}
{/*value={question} onChange={(event) => setQuestion(event.target.value)}
onClick={send}
*/}