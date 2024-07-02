import Button from "../../Buttons/Button";
import Games2 from "../Games2";
import './GamesForCompany.css'
import TypeCommand from "./TypeCommand";
import g1 from './imgGames/g1.svg'
import g2 from './imgGames/g2.svg'
import g3 from './imgGames/g3.svg'
import g4 from './imgGames/g4.svg'

export default function GamesForCompany({children, text, img, develop}){
    return(
        <Games2 img={img} title={children} text={text} develop={develop}>
            {develop ? <Button className='GamesForCompanyButton' buyTicketButton={true}>ХОТИМ ПОИГРАТЬ</Button> : 
                <div className="GamesForCompanyDiv">
                    <TypeCommand text1='Для детей' img1={g1} marginTop={true} text2='Для подростков' img2={g2}></TypeCommand>
                    <TypeCommand text1='Для взрослых' img1={g3} text2='Для смешанных команд' img2={g4}></TypeCommand>
                </div>}
        </Games2>
    )
}