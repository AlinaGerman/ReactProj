import AboutGameModal from './AboutGameModal'
import DescDetailesModal from './DescDetailesModal'
import './DetailesModal.css'
import game1 from './pictures/game1.svg'
import game11 from './pictures/game11.svg'
import { dataDateilsModalImgGame, dataDetailesModalAbout } from './dataDetailesModal'
import DescText from './DescText'
import Button from '../../../../../Buttons/Button'
import ImgGame from './ImgGame'

export default function DetailesModal({children, typeGame,... props}){
    return(
        <>
            {dataDateilsModalImgGame.map((data) => {
                if (data.game==typeGame)
                return <ImgGame data={data} key={data.game}></ImgGame>
            })}
            <div className='DetailesModalDiv'>
                <h1 className='DetailesModalTitle'>{children}</h1>
                <div >
                    <DescDetailesModal className='opacityDetailesModal'>Жанр </DescDetailesModal>
                    <DescDetailesModal className='ValueDetailesModal' style={{marginRight:'10%'}}>{props.type}</DescDetailesModal>
                    <DescDetailesModal className='opacityDetailesModal'>Зал  </DescDetailesModal>
                    <DescDetailesModal className='ValueDetailesModal'>Арена 100 м²</DescDetailesModal>
                </div>
                <div className='aboutGameModal'>
                    {dataDetailesModalAbout.map((data) => {
                        if (data.game==typeGame){
                            return <AboutGameModal data={data} key={data.text}></AboutGameModal>
                        }
                    })}
                </div>
                
                <DescText><b>Страх или желание выжить</b> — что тебе ближе? Легендарный VR зомби-шутер City Z это твой способ узнать ответ. Чтобы выбраться <b>из развалин «Москва-Сити»</b>, придется прогуляться по парапету над пропастью, научиться ориентироваться в темноте и перестрелять сотни ходячих мертвецов.</DescText>
                <DescText>У тебя <b>нет никаких ограничений</b>, кроме собственных страхов. У зомби нет никаких желаний, кроме желания убивать. Готов ли ты к такой <b>репетиции апокалипсиса?</b></DescText>
                <DescText>Надевай броню, выбирай винтовку или дробовик — теперь <b>ты часть группы спецназа.</b> У вашей команды специальная миссия — добраться до секретной лаборатории и остаться в живых.</DescText>
                <Button className='aboutGameDetailesModal'>ОБ ИГРЕ</Button>
            </div>
        </>
    )
}