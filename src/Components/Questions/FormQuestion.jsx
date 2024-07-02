import './Questions.css'

export default function FromQuestion({... props}){
    return(
        <form>
            <input type='text' className={props.className} placeholder={props.placeholder}
                value={props.value} onChange={props.onChange} ></input>
        </form>
    )
}