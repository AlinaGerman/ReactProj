/*import React, { useState } from 'react'
import './Menu.css'
import logo from '/logo-name.svg'
import ButtonNav from './ButtonNav';
import Amenu from './Amenu';


export default function Header(){
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }

    let [show, setShow] = useState(false)
    let [type_link,setType_link] = useState(null)

    function showLink(typeLink){
      setShow(!show)
      setType_link(typeLink)
    }
    function notShowLikn(){
      setShow(false)
      setType_link(null)
    }
    let content=null
    if (show){
      content=<>
              <div className={ `dropdown-content-${type_link} `}>
                <Amenu nameLink={type_link} ></Amenu>
              </div>
              </>
    } else {
      content=null
    }
  
    return(
      <header>
        <div className="menu">
          <ButtonNav link='/'><img src={logo}></img></ButtonNav>
          <div className='dropdown'>{content}</div>
        </div>
        <div className='menu menuContents'>
          <ButtonNav link='none' isVector={true} onClick={() => showLink('entertainment')}>РАЗВЛЕЧЕНИЯ </ButtonNav>
          <ButtonNav link='none' isVector={true} onClick={() => showLink('holidays')} >ПРАЗДНИКИ </ButtonNav>
          <ButtonNav link='/sertificats'>СЕРТИФИКАТЫ</ButtonNav>
          <ButtonNav link='/contaktArena'>КОНТАКТЫ</ButtonNav>
        </div>
        <div className="menu menuContact">
          <ButtonNav link='none'>+7 (495) 133-02-43</ButtonNav>
          <ButtonNav link='none' isVector={true} onMouseEnter={() => showLink('place')} onMouseLeave={notShowLikn}>МОСКВА </ButtonNav>
          <ButtonNav link='none'>ВОЙТИ</ButtonNav>
          <ButtonNav link='none' isVector={true} onMouseEnter={() => showLink('language')} onMouseLeave={notShowLikn}>RU </ButtonNav>
        </div>
       
      </header>
    )
}*/