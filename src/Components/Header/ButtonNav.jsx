import './Menu.css'
import { Link, NavLink } from "react-router-dom";


export default function ButtonNav({children, onClick, isVector, link, ... props}){
    return(
         
        <NavLink to={link=='none' ? '#' : link} className='navButton' 
            onClick={onClick}>
                {children}{isVector ? <span className='vector'>&#9013;</span>: <span className='vector'></span>}
        </NavLink>
        
    )
}
/*
onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}


<button to={link} className='navButton' 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}>
                {children}{isVector ? <span className='vector'>&#9013;</span>: <span className='vector'></span>}
        </button>



export default function ButtonNav({children, onClick, isVector, onMouseEnter, onMouseLeave, link, ... props}){
    return(
        <button {... props} className='navButton' 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}>
            
             {children}{isVector ? <span className='vector'>&#9013;</span>: <span className='vector'></span>}
        </button>
    )
}*/
