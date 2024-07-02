import Event from '../Event'
import left from './left.png'
import right from './right.svg'

export default function Corporative(){
    return(
        <Event pictLeft={left} width1='15%' pictRight={right} width2='14%' nameButton='РАССЧИТАТЬ СТОИМОСТЬ' vectorOrButton={true} link1='Как организовать?' link2='Сколько стоит?' link3='А чем кормят?' text='В нашем парке можно устроить праздник, который не забудется ни имененниками, ни их гостями.'>Самый незабываемый день!</Event>
    )
}