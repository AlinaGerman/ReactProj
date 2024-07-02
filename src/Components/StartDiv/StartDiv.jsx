import './StartDiv.css'
import '../Str2/FirstDiv/FirstDivs.css'

/*import fon from '/logo.svg'*/
import fon from './picture/fon.svg'
import fon2 from '../Str2/FirstDiv/fon2.svg'
import video from './picture/video.svg'
import square from './picture/squarePark.svg'
import command from './picture/command.svg'
import free from './picture/free.svg'
import location from './picture/location.svg'
import CarouselDiscount from './Carousel/Carousel'
import Plus from './Plus'
import play from './picture/play.svg'
import OpenDIalogModal from '../DialogModal/OpenDIalogModal'
import { useState } from 'react'
import CloseButtonDialog from '../DialogModal/CloseButtonDialog'
import './openVideo.css'


import arena from '../Str2/FirstDiv/arena.svg'
import broneNow from '../Str2/FirstDiv/broneNow.svg'
import Button from '../Buttons/Button'


export default function StartDiv({str1, ... props}){
    const [showVideo, setShowVideo] = useState(false)

    function openAboutArena(){
        setShowVideo(true)
    }
    return(
        <div style={props.style}>
            {/*<img src={fon} className={str1 ? 'fon' : 'fon FirstDivFon'}/>*/}
            <img src={str1 ? fon : fon2} className={str1 ? 'fon' : 'fon FirstDivFon'}></img>
            <div className={str1 ? 'StartDiv0' : 'StartDiv0 FirstDiv0'}>
                <div className={str1 ? 'd1' : 'd1 FirstDiv1'}>
                    {str1 ? <><div style={{marginBottom: '9%'}}>
                                    <p style={{fontWeight: '600',fontSize: '450%',marginBottom:'-1.5%'}}>VR-КЛУБ «ANVIO»</p>
                                    <p style={{fontSize: '230%', lineHeight:'110%'}}>парк цифровых развлечений <br/>для всей семьи</p>
                                </div>
                                <div className='d2'>
                                    <Plus icon={square} style={{marginRight:'5%'}}>Площадь парка<br/> 2100 м<sup>2</sup></Plus>
                                    <Plus icon={command} style={{marginRight:'5%'}}>Командные <br/>игры</Plus>
                                    <Plus icon={free}>Свобода <br/>передвижений</Plus>
                                </div>
                                <CarouselDiscount/></> : 
                                <>
                                    <h1 className='FirstDivTitle'>VR-игры<br/> в формате «АРЕНА»</h1>
                                    <h5 style={{fontWeight:'400'}}>Стоимость за игрока в команде от 1000 ₽.</h5>
                                    <Button className='FirstDivBroneButton'>ЗАБРОНИРОВАТЬ СЕЙЧАС <img className='FirstDivBroneImg' src={broneNow}></img></Button>
                                </>}
                </div>
                {str1 ? <div className='videoPlayDiv'>
                            <div className='videoDiv'>
                                <img src={video} className='video' width='100%'/>
                                <img src={play} width='10%'style={{position:'relative', zIndex:'1'}} onClick={openAboutArena}/>
                            </div>
                        </div> : 
                        <img src={arena} width='70%'></img>}
            </div>
            {str1 ? <div className='location'>
                        <img src={location} width='26%'/>
                    </div> : <></>}
            
            <OpenDIalogModal open={showVideo} className='dialogVideo'>
                <CloseButtonDialog onClick={() => setShowVideo(false)}></CloseButtonDialog>
                <div>
                    {/*<iframe
                        width="880rem"
                        height="500rem"
                        src="https://www.youtube.com/embed/Kf-dSpMqKPQ?si=ZDjezrDbarfeKMOU?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" 
                        allowFullScreen>
                    </iframe>*/}
                </div>
            </OpenDIalogModal>
            
        </div>
    )
}