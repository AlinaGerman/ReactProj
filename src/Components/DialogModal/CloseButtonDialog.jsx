import close from './close.svg'
import '../Entertaiment/AboutArena/AboutArena.css'


export default function CloseButtonDialog({children, onClick, ... props}){
    return(
        <button {... props} className={props.className ? props.className : 'closeButtonArena'}
        onClick={onClick}>
            <img src={close} style={{width:'95%'}}></img>
        </button>
    )
}