import { useEffect, useState, useCallback} from 'react'
import './BuyTicketModal.css'
import Element1 from './Content/Element1/Element1'
import Element2 from './Content/Element2/Element2'
import Element3 from './Content/Element3/Element3'
import Element4 from './Content/Element4/Element4'

import point from './point.svg'
import vertPoint from './Content/Element4/vertpoint.svg'
import Element5 from './Content/Element5/Element5'

let dates=['1 марта','2 марта','3 марта', '4 марта','5 марта']

export default function ElementBuyTicketModal({children, num, ... props}){
   
   

    return(
        <div className="ElementBuyTicketModalDiv">
            {(num=='2' || num=='3' || num=='4') ? <div className='ElementTicketModalTitleDiv'>
                                                    <h2 className='ElementBuyTicketModalTitle'>{children}</h2>
                                                    <img src={num=='4' ? vertPoint : point} width={num=='4' ? '8%' : '6.5%'} style={{marginTop:'-2%'}}></img>
                                                </div> :
                                                <h2 className='ElementBuyTicketModalTitle'>{children}</h2>}
            
            {num=='1' && <Element1></Element1>}
            {num=='2' && <Element2></Element2>}
            {num=='3' && <Element3 ></Element3>}
            {num=='4' && <Element4 ></Element4>}
            {num=='5' && <Element5></Element5>}
            

        </div>
    )
}
 /*const [curDate, setCurdate]=useState(0)
    var currDate=curDate
    const newDate=() => {
        setCurdate(() => {

        })
func={props.fun}
        currentDate={currDate}
    }*/