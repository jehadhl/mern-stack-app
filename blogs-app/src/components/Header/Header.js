import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
         <span className='headerTitleSm'>Home/Blog</span>
         <span className='headerTitleLg'>Blog</span>
      </div>
    
      <img
        src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='images'
        className='images'
      />
    
    </div>
  )
}

export default Header