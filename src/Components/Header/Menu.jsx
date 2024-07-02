import React, { useState } from 'react'
import './Menu.css'
import logo from '/logo-name.svg'
import ButtonNav from './ButtonNav';
import Amenu from './Amenu';
import { Link } from "react-router-dom";


export default function Menu(){
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  let [show, setShow] = useState(false)
  let [type_link,setType_link] = useState(null)
  function showLink(typeLink){
    setShow(true)
    setType_link(typeLink)
  }
  function notShowLikn(){
    setShow(false)
    setType_link(null)
  }
  let content=null
  if (show){
      content=<>
        <div className='dropdown-content'>
          <Amenu nameLink={type_link} onMouseEnter={() => showLink(type_link)} onMouseLeave={notShowLikn}></Amenu>
        </div>
      </>
  } else {
    content=null
  }

  return(
    <>
    <div className="menu">
      <Link to={`/Home`}><img src={logo}></img></Link>
      {/*<div className='dropdown'>{content}</div>*/}
    </div>
    <div className='menu'>
      <ButtonNav isVector={true} style={{marginRight: '1.5%', paddingTop: '0.7%'}} onMouseEnter={() => showLink('entertainment')} onMouseLeave={notShowLikn}>РАЗВЛЕЧЕНИЯ </ButtonNav>
      <ButtonNav isVector={true} style={{marginRight: '1.5%',paddingTop: '0.7%'}} onMouseEnter={() => showLink('holidays')} onMouseLeave={notShowLikn}>ПРАЗДНИКИ </ButtonNav>
      <ButtonNav isVector={false} style={{marginRight: '2%'}}>СЕРТИФИКАТЫ</ButtonNav>
      <ButtonNav isVector={false}>КОНТАКТЫ</ButtonNav>
    </div>
    <div className="menu">
      <ButtonNav style={{marginRight: '2%'}}>+7 (495) 133-02-43</ButtonNav>
      <ButtonNav isVector={true} style={{marginRight: '2%', paddingTop: '0.7%'}} onMouseEnter={() => showLink('place')} onMouseLeave={notShowLikn}>МОСКВА </ButtonNav>
      <ButtonNav isVector={false} style={{marginRight: '2%'}}>ВОЙТИ</ButtonNav>
      <ButtonNav isVector={true} style={{paddingTop: '0.7%'}} onMouseEnter={() => showLink('language')} onMouseLeave={notShowLikn}>RU </ButtonNav>
    </div>
     
    </>
  )
  {/*return (
    <div className="menu">
      <img src={logo}></img>
      <button className="menu-icon" onClick={toggleMenu}>&#9776;</button>
      <nav className={`menu-items ${showMenu ? 'show' : ''}`}>
        <div className='dropdown' style={{marginLeft: '10%', marginRight: '1.5%'}}><ButtonNav isVector={true}  onMouseEnter={() => showLink('entertainment')} onMouseLeave={notShowLikn}>РАЗВЛЕЧЕНИЯ </ButtonNav></div>
        <div className='dropdown' style={{marginRight: '1.5%'}}><ButtonNav isVector={true} onMouseEnter={() => showLink('holidays')} onMouseLeave={notShowLikn}>ПРАЗДНИКИ </ButtonNav>  
        {content}</div>       
        <ButtonNav isVector={false} style={{marginRight: '2%'}}>СЕРТИФИКАТЫ</ButtonNav>
        <ButtonNav isVector={false} style={{marginRight: '10%'}}>КОНТАКТЫ</ButtonNav>

        <ButtonNav style={{marginRight: '2%', marginLeft: '10%'}}>+7 (495) 133-02-43</ButtonNav>
        <div className='dropdown' style={{marginRight: '2%'}}><ButtonNav isVector={true} onMouseEnter={() => showLink('place')} onMouseLeave={notShowLikn}>МОСКВА </ButtonNav></div>
        <ButtonNav isVector={false} style={{marginRight: '2%'}}>ВОЙТИ</ButtonNav>
        <div className='dropdown'><ButtonNav isVector={true} onMouseEnter={() => showLink('language')} onMouseLeave={notShowLikn}>RU </ButtonNav></div>
      </nav>
    </div>
  )*/}
}
