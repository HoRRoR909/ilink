import React from 'react'

import logo from '../../resourses/img/logo.svg'
import emptyAvatar from '../../resourses/img/konstantin-avatar.jpg'

import './header.scss'

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header">
        <div className="user">
          <img width="52" height="52" src={emptyAvatar} alt="emptyAvatar" />
          <span>Константин Осокин</span>
        </div>
        <div className="logo">
          <img width="85.43" height="52" src={logo} alt="logo" />
        </div>
        <button className="my_account">Личный кабинет</button>
      </div>
    </div>
  )
}

export default Header