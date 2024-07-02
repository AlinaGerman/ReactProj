import Button from "../Buttons/Button";
import MultyCarousel from "./MultyCarousel";
import point from './point.svg'

export default function MulCarouselDiv({type, children, dataComp, widthImg, buyTicketButton, ... props}){
    return(
        <div className='allDiv' style={props.style} id={props.id}>
           {(type=='Comments') ? <><h1 className='title'>{children}</h1>
            
                                    <MultyCarousel type={type}></MultyCarousel></>
           : <><div className='EmotionsDiv' >
                    <h1 className='title EmotionsTitle'>{children}</h1>
                    <Button buyTicketButton={buyTicketButton} className={props.buttonClass} id={props.id}>{props.buttonName}</Button>
                    
                </div>

                <MultyCarousel type={type} displayElement4={props.displayElement4 ? true : false} dataComp={dataComp} widthImg={widthImg}></MultyCarousel></> }
                <img src={point} width='3%' className='StarPeoplePoint'></img>
        </div>
    )
}