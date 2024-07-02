import './StarPeopleItem.css'

export default function StarPeopleItem({... props}){
    return(
         <div className='itemDivStarPeople'>
            <img src={props.data.video} width={props.widthImg}></img>
            <p className='StarPeopleItemText'>{props.data.text}</p>
        </div>
    )
}