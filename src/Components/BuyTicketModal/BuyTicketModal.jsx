import './BuyTicketModal.css'
import BuyTicketModalDiv from './BuyTicketModalDiv'

import li1 from './li/li1.svg'
import li2 from './li/li2.svg'
import li3 from './li/li3.svg'
import li4 from './li/li4.svg'
import li5 from './li/li5.svg'

export default function BuyTicketModal(){
    return(
        <div className='showBuyTicketList div-no-scrollbar'>
        
            <BuyTicketModalDiv img={li1} num='1'>Выберите место игры</BuyTicketModalDiv>
            <BuyTicketModalDiv img={li2} num='2'>Выберите игру</BuyTicketModalDiv>
            <BuyTicketModalDiv img={li3} num='3'>Выберите дату</BuyTicketModalDiv>
            <BuyTicketModalDiv img={li4} num='4'>Выберите сеанс</BuyTicketModalDiv>
            <BuyTicketModalDiv img={li5} num='5'>Информация о заказе и оплата</BuyTicketModalDiv>
            
        
        </div>
    )
}