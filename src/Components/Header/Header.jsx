import React, { useState } from 'react'
import './Menu.css'
import logo from '/logo-name.svg'
import ButtonNav from './ButtonNav';
import Amenu from './Amenu';


export default function Header(){
    /*const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }*/

    let [show, setShow] = useState(false)
    let [type_link,setType_link] = useState(null)

    let [showEntert, setShowEtnert] = useState(false)
    function showEntertCont(){
      setShowEtnert(!showEntert)
      setShowHolid(false)
      setShowPlace(false)
      setShowLanguage(false)
    }

    let [showHolid, setShowHolid] = useState(false)
    function showHolidCont(){
      setShowHolid(!showHolid)
      setShowEtnert(false)
      setShowPlace(false)
      setShowLanguage(false)
    }

    let [showPlace, setShowPlace] = useState(false)
    function showPlaceCont(){
      setShowPlace(!showPlace)
      setShowEtnert(false)
      setShowHolid(false)
      setShowLanguage(false)
    }

    let [showLanguage, setShowLanguage] = useState(false)
    function showLanguageCont(){
      setShowLanguage(!showLanguage)
      setShowEtnert(false)
      setShowHolid(false)
      setShowPlace(false)
    }

    /*function showLink(typeLink){
      setShow(!show)
      setType_link(typeLink)
    }
    /*function notShowLikn(){
      setShow(false)
      setType_link(null)
    }*/

       
    /*if (show){
      content=<>
              <div className= 'dropdown-content '>
                <Amenu nameLink={type_link} ></Amenu>
              </div>
              </>
    } else {
      content=null
    }*/
    let content=<></>
    if (showEntert){
      content=<>
                <div className= 'dropdown-content dropdown-content-entert'>
                  <Amenu nameLink='entertainment' ></Amenu>
                </div>
                </>
    }
    if (showHolid){
      content=<>
                <div className= 'dropdown-content dropdown-content-hold'>
                  <Amenu nameLink='holidays' ></Amenu>
                </div>
                </>
    }
    if (showPlace){
      content=<>
                <div className= 'dropdown-content '>
                  <Amenu nameLink='place' ></Amenu>
                </div>
                </>
    }
    if (showLanguage){
      content=<>
                <div className= 'dropdown-content dropdown-content-lang'>
                  <Amenu nameLink='language' onClickLang={() => setShowLanguage(false)}></Amenu>
                </div>
                </>
    }

  
    return(
      <header>
        <div className="menu">
          <ButtonNav link='/'><img src={logo}></img></ButtonNav>
          {showEntert ? <div className='dropdown dropdown-entertainment'>{content}</div> : <></>}
          {showHolid ? <div className= 'dropdown dropdown-holidays'>{content}</div> : <></>}
          {showPlace ? <div className= 'dropdown dropdown-place'>{content}</div> : <></>}
          {showLanguage ? <div className= 'dropdown dropdown-language'>{content}</div> : <></>}
        </div>
        
        <div className='menu menuContents'>
          <ButtonNav link='none' isVector={true} onClick={showEntertCont}>РАЗВЛЕЧЕНИЯ </ButtonNav>
          <ButtonNav link='none' isVector={true} onClick={showHolidCont} >ПРАЗДНИКИ </ButtonNav>
          <ButtonNav link='/sertificats'>СЕРТИФИКАТЫ</ButtonNav>
          <ButtonNav link='/contaktArena'>КОНТАКТЫ</ButtonNav>
        </div>
       
        <div className="menu menuContact">
          <ButtonNav link='none'>+7 (495) 133-02-43</ButtonNav>
          <ButtonNav link='none' isVector={true} onClick={showPlaceCont}>МОСКВА </ButtonNav>
          <ButtonNav link='none'>ВОЙТИ</ButtonNav>
          <ButtonNav link='none' isVector={true} onClick={showLanguageCont}>RU </ButtonNav>
        </div>
      </header>
    )
}
