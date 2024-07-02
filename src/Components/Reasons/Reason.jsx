import { reasons } from './reasons'
import './Reasons.css'

export default function Reason(){
    return(
        reasons.map((reason) => {
            return <div className='reasonDiv' key={reason.title}>
                        <img src={reason.icon} className='icon-reason'></img>
                        <div>
                            <p className='titleReason'>{reason.title}</p>
                            <p className='textReason'>{reason.text}</p>
                        </div>
                    </div>
        })
    )
}