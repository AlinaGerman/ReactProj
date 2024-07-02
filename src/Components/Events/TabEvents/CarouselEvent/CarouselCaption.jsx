import Button from '../../../Buttons/Button'
import './CarouselEvent.css'

export default function CarouselCaption({ children, text, avatar, fio, ... props}){
    return(
        <div className='contEvent' {... props}>
                <h5 className='titleCommEvent'>{children}</h5>
                <p className='textCommEvent'>{text}</p>
                <div className='autorEvent'>
                    <img src={avatar} className='avatarEvent' ></img>
                    <p className='fioAutorEvent'>{fio}</p>
                    <Button className='insta'>Instagram →</Button>
                </div>
        </div>
    )
}