export default function EmotionsItem({... props}){
    return (
        
        <div className="EmotionsItemDiv">
            <img src={props.data.img1} className='EmotionsItem1' width='119%'></img>
            <img src={props.data.img2} className='EmotionsItem2' width='127%'></img>
            <img src={props.data.img3} className='EmotionsItem3' width='130%'></img>            
        </div>
    )
}