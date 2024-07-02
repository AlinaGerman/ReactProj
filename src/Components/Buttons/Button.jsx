import { useState } from 'react'
import '../Entertaiment/ContentEntert/Arena/games/DetailesModal/DetailesModal.css'
import OpenDIalogModal from '../DialogModal/OpenDIalogModal'
import CloseButtonDialog from '../DialogModal/CloseButtonDialog'
import BuyTicketModal from '../BuyTicketModal/BuyTicketModal'
import '../BuyTicketModal/BuyTicketModal.css'

export default function Button({children, ... props}){
    const [showBuy, setShowBuy] = useState(false)

    function openBuy(){
        setShowBuy(true)
    }

    return(
        <>
            <button type='button' className={props.className} style={props.style}
                onClick={props.buyTicketButton ? openBuy : props.onClick} id={props.id}>{children}</button>

            
                
            {props.buyTicketButton ? <OpenDIalogModal open={showBuy} className='showBuyTicket '>
                <div className='showBuyTicketDiv'>
                    <CloseButtonDialog onClick={() => setShowBuy(false)} className='CloseButtonBuyTicket'></CloseButtonDialog>       
                    <BuyTicketModal></BuyTicketModal>
                </div>
            </OpenDIalogModal> : <></> }
        </>
    )
}