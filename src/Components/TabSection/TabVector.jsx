import VectorDiv from "./VectorDiv"

export default function TabVector({active, activeContent, EntertEvent}){
    return(
        activeContent.map((activeCont) => {
            return <VectorDiv key={activeCont} isActive={active===activeCont} EntertEvent={EntertEvent}></VectorDiv>
        })
    )
}