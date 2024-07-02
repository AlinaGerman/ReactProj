import logo_name from '/logo-name.svg'
import './Info.css'
import CountruesClub from './CountriesClub.jsx'

export default function Info(){
    return(
        <div style={{marginBottom:'6%'}}>
            <div className='logo-name'>
                <img src={logo_name} width='80%' ></img>
            </div>
            
            <div className='info'>
                <div className='countries-club'>
                    <CountruesClub style={{marginRight:'10%'}} text='стран'>12</CountruesClub>
                    <CountruesClub text='клубов'>26</CountruesClub>
                </div>
                <div>
                    <p className='info-title'>Международная сеть VR клубов</p>
                    <p className='info-text'>Мы открыли парк цифровых развлечений для всей семьи в самом центре Москвы в Цетральном дестком магазине. На 2100 м² мы выстроили абсолютно новое игровое пространство, объединяюющее в себе VR-арены, стенды, игровые автоматы и аттракционы.</p>
                    <p className='info-text'>Anvio VR — это международная сеть клубов виртуальной реальности, расположенных по всему миру более чем в 26 странах: США, Канада, Франция, Израиль, Германия, Китай, Бразилия, Колумбия, Россия, Киргизстан.</p>
                </div>
            </div>
        </div>
    )
}