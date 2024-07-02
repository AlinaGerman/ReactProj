import '../Events/TabEvents/TabEvents.css'
import './ButtonEntert.css'

export default function ButtonEntertEvent({children,isActive,images, onClick,EntertButt,... props}){
    var on=`/src/Components/Events/TabEvents/iconEvents/${images}On.svg`
    var off=`/src/Components/Events/TabEvents/iconEvents/${images}Off.svg`
    
    return(
        <button {... props}
        className={EntertButt ? isActive ? `ButtonEntertaimentn active ${props.className}` : `ButtonEntertaimentn ${props.className}` :
                                isActive ? 'ButtonEvent active' : 'ButtonEvent'} 
        onClick={onClick}>
            {EntertButt ? <></> : isActive ? <img src={on} className='iconEvent'></img> : <img src={off} className='iconEvent'></img>}
            {children}
        </button>
    )
}