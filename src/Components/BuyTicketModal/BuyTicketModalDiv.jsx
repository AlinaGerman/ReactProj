import ElementBuyTicketModal from "./ElementBuyTicketModal0";
import './BuyTicketModal.css'
import { useState } from "react";
let dates=['1 марта','2 марта','3 марта', '4 марта','5 марта']

import dots from './dots.svg'

export default function BuyTicketModalDiv({children, img, num}){
    /*const [curDate, setCurdate]=useState(0)

    function la(ind){
        setCurdate(ind)
        console.log(ind, curDate, dates[curDate])
    }
        <ElementBuyTicketModal  cur={curDate} fun={la}>{children}</ElementBuyTicketModal>
    */

    return(
        <div className="BuyTicketModalDiv">
            <img src={img} width='8.5%' style={{position: 'relative', zIndex:'1'}}></img>
            {num!='5' ? <img src={dots} className="BuyTicketModalDivDots"></img> : <></>}
            <ElementBuyTicketModal num={num}>{children}</ElementBuyTicketModal>
        </div>
    )
}