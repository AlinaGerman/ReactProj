import MultyCarousel from "../../../MultyCarousel/MultyCarousel";
import CarouselEleemnt3 from "./CarouselElement3";
import './Element3.css'

export default function Element3({func}){
    return(
        <div className="Element3Div" >
            <div className="Element3DivDiv">
                {/*<CarouselEleemnt3 ></CarouselEleemnt3>*/}
                <div className="Element3Month">
                    <span>Март</span>
                    <span>Апрель</span>
                </div>
                <MultyCarousel  type='buyTicket3' displayElement9={true}></MultyCarousel>
            </div>
        </div>
    )
}

/*onClick={() => func(2)}*/