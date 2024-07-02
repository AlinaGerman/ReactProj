import Button from '../Buttons/Button'
import '../Sales/Sales.css'
import '../News/News.css'
import saleImg from '../Sales/saleImg.svg'


export default function SalesNewsItem({isSales,... props}){
    return(
        <div className={isSales ? 'SalesItemDiv' : 'NewsItemDiv'}>
            <p className={isSales ? 'SalesItemDays' : 'NewsItemDays'}>{props.data.date}</p>
            {props.data.isImage ? <img src={props.data.image} width='100%'></img> : <></>}
            {isSales ? <div className='SalesItemTitleImg'>
                            <h4 style={{fontWeight:'500', width:'70%'}}>{props.data.title}</h4>
                            <img src={saleImg} width='20%'></img>
                        </div> : <h4 className='NewsItemTitle'>{props.data.title}</h4>}
            
            <p className={isSales ? 'SalesItemText' : 'NewsItemText'}>{props.data.text}</p>
            <Button className={isSales ? 'SalesItemButton' : 'NewsItemButton'}>ПОДРОБНЕЕ</Button>
        </div>
    )
}