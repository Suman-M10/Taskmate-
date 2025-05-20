import React, { useEffect, useState } from 'react'
import Logo from '../assets/react.svg.png'
function Header() {

  const getTheme=()=>{
    const res=JSON.parse(localStorage.getItem('theme'));
    return res?res:'light';
  }

  const [theme,setTheme]=useState(getTheme());

  useEffect(()=>{
    localStorage.setItem('theme',JSON.stringify(theme));
    document.documentElement.className='';
    document.documentElement.classList.add(theme);
  },[theme])



  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt='Logo'/>
            <span>Taskmate</span>
        </div>
        <div className='themeSelector'>
            <span className={theme==='light'?'light activeTheme':'light'} onClick={()=>{setTheme('light')}}></span>
            <span className={theme==='medium'?'medium activeTheme':'medium'} onClick={()=>{setTheme('medium')}}></span>
            <span className={theme==='dark'?'dark activeTheme':'dark'} onClick={()=>{setTheme('dark')}}></span>
            <span className={theme==='gOne'?'gOne activeTheme':'gOne'} onClick={()=>{setTheme('gOne')}}></span>
            <span className={theme==='gTwo'?'gTwo activeTheme':'gTwo'} onClick={()=>{setTheme('gTwo')}}></span>
            <span className={theme==='gThree'?'gThree activeTheme':'gThree'} onClick={()=>{setTheme('gThree')}}></span>
        </div>
    </header>
  )
}

export default Header