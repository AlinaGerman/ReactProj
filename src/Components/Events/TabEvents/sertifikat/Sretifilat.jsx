import Event from '../Event'
import left from './left.svg'
import right from './right.svg'

export default function Sertifikat(){
    return(
        <Event pictLeft={left} width1='17%' pictRight={right} width2='11%' nameButton='КУПИТЬ СЕРТИФИКАТ' vectorOrButton={false} isSertificat={true} link1='На какие развлечения?' link2='Для кого?' link3='Как подарить?' text='Мы разработали специальную систему подарочных карт. Теперь вы всегда можете сделать нестандартный и запоминающийся подарок.'>Подарочные сертификаты</Event>
    )
}