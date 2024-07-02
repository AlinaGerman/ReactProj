import './DetailesModal.css'

export default function AboutGameModal({... props}){
    return(
        <div className="AboutGameModalDiv">
            <img src={props.data.img} width={props.data.width} style={{marginBottom:'2%'}}></img>
            <p className='AboutGameModalText'>{props.data.text}</p>
        </div>
    )
}