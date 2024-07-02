import './DetailesModal.css'
import Button from '../../../../../Buttons/Button'

export default function ImgGame({... props}){
    return(
        <div className='DetailesModalDiv' style={{marginRight:'2%'}}>
            <img src={props.data.img1} width='100%' height='59%' style={{marginBottom:'2%',borderRadius:'20px'}}></img>
            <div style={{marginBottom:'1rem'}}>
                <img src={props.data.img2} width='49%' height='100%' style={{marginRight:'2%',borderRadius:'10px'}}></img>
                <img src={props.data.img2} width='49%' style={{borderRadius:'10px'}}></img>
            </div>
            <Button className='broneDetailesModal'>ЗАБРОНИРОВАТЬ</Button>
        </div>

    )
}