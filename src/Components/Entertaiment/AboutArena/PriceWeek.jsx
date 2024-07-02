import './PriceWeek.css'
import {aboutArenaPrice} from './aboutArenaData.js'

export default function PriceWeek({idAbout}){
    return(
        aboutArenaPrice.map((weekDay) => {
            if (weekDay.id==idAbout){
                return <div className='PriceWeekDiv' key={weekDay.day}>
                            <h5 className='PriceWeekDay'>{weekDay.day}</h5>
                            <div className='PriceWeekDiv2'>
                                <span className='PriceWeekDiv2Price'>{weekDay.dayiPrice}</span>
                                <span className='PriceWeekDiv2Info'>за человека*</span>
                            </div>
                        </div>
            }
        })
    )
}