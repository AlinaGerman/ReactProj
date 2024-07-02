import ButtonEntertEvent from "./ButtonEvent";
import '../Entertaiment/ContentEntert/ContentEntert.css'

export default function TabSection({active, onChange, activeContent, name, stylee, EntertEvent}){
    let butons=[]
    for (let i=0; i<activeContent.length; i++){
        let button=[]
        button.push(activeContent[i])
        button.push(name[i])
        button.push(stylee[i])
        if (activeContent[i]=='childZone' || activeContent[i]=='pvp'){
            button.push('mobileArena')
        } else{
            button.push('')
        }

        butons.push(button)
    }

    return(
        butons.map((butt) => {
            if (EntertEvent){
                return <ButtonEntertEvent EntertButt={true} className={butt[3]} key={butt[0]} isActive={active===butt[0]} onClick={() => onChange(butt[0])} style={{marginRight:butt[2]}}>{butt[1]}</ButtonEntertEvent>
            } else{
                return <ButtonEntertEvent key={butt[0]} images={butt[0]} isActive={active===butt[0]} style={{marginRight:butt[2]}} onClick={() => onChange(butt[0])}>{butt[1]}</ButtonEntertEvent>
            }
        })
    )
}