import Event from '../Event'
import left from './left.png'
import right from './right.png'

export default function NoStandartEvent(){
    return(
        <Event pictLeft={left} width1='12%' pictRight={right} width2='11%' nameButton='РАССЧИТАТЬ СТОИМОСТЬ' vectorOrButton={true} link1='Как организовать?' link2='Сколько стоит?' link3='А чем кормят?' text='В нашем парке можно устроить праздник, который не забудется ни имененниками, ни их гостями.'>Подарите самый незабываемый день!</Event>
    )
}