import './GamesForCompany.css'
import TypeCommandDiv from './TypeCommandDiv'

export default function TypeCommand({text1, img1, text2, img2, marginTop}){
    return (
        <div className='TypeCommandDiv'>
            <TypeCommandDiv img={img1} marginTop={marginTop}>{text1}</TypeCommandDiv>
            <TypeCommandDiv img={img2}>{text2}</TypeCommandDiv>
        </div>
    )
}