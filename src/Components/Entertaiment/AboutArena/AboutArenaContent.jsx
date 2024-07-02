import people from './people.svg'
import time from './time.svg'
import {aboutArenaData, aboutArenaPlus} from './aboutArenaData.js'
import PriceWeek from './PriceWeek.jsx'
import Button from '../../Buttons/Button.jsx'
import './AboutArena.css'
import AboutArenaContentOsobennost from './AboutArenaContentOsobennost.jsx'

export default function AboutArenaContent({isActive, children, price, osobennostImg, idAbout, onClick, ... props}){
    return(
        <div className={ isActive ? "AboutArenaContentDiv active" : "AboutArenaContentDiv"} onClick={onClick}>
            
            <div className="AboutArenaContentTitnePrice">
                <h3 className={isActive ? 'AboutArenaContentTitle active' : 'AboutArenaContentTitle'}>{children}</h3>
                <div className="AboutArenaContentPrice">
                    <h3 className="AboutArenaContentPriceTitle">{price}</h3>
                    {isActive ? <p className="AboutArenaContentPriceText">За команду до 6 чел.</p> : <></>}
                </div>
            </div>

            {aboutArenaData.map((data) => {
                if (data.id==idAbout){
                    return <div className='AboutArenaContentOsobennost' key={data.textPeople}>
                                <AboutArenaContentOsobennost width='7.5%' img={people}>{data.textPeople}</AboutArenaContentOsobennost>
                                <AboutArenaContentOsobennost width='9.5%' img={time}>{data.timeText}</AboutArenaContentOsobennost>
                                <AboutArenaContentOsobennost width={props.width1} img={osobennostImg}>{data.squareText}</AboutArenaContentOsobennost>            
                            </div>
                }
            })}
            
            <ul className='AboutArenaContentList'>
                {aboutArenaPlus.map((plus) => {
                    if (plus.id==idAbout){
                        return plus.liContent.map((plusLi) => {
                            return <li className='AboutArenaContentLi' key={plusLi}>{plusLi}</li>
                        })
                    }
                })}
            </ul>

            <PriceWeek idAbout={idAbout}></PriceWeek>

            <h5 className='AboutArenaContentMark'>* стоимость указана на полную команду 6 человек</h5>

            <Button className='timeTablePrice'>РАСПИСАНИЕ И ЦЕНЫ</Button>
        </div>
    )
}