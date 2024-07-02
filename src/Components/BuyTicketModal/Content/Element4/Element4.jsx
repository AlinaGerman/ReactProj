import Element4Item from "./Element4Item"
import './Element4.css'
import { dataElement4 } from "./dataElement4"

export default function Element4({currentDate}){
    return(
        <div className="Element4Div">
            <h5>Расписание на 22 марта{currentDate}</h5>
            <div className="Element4DivDiv">
            

                <ol className="Element4List div-no-scrollbar">
                    {dataElement4.map((data) => {
                        return <Element4Item data={data} key={data.time}></Element4Item>
                    })}
                </ol>
            </div>
        </div>
    )
}