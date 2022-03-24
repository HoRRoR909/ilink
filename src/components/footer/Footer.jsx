import React from 'react'

import facebook from '../../resourses/img/icons/facebook.svg'
import ufo from '../../resourses/img/icons/ufo.svg'
import telegram from '../../resourses/img/icons/telegram.svg'

import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
          <p>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
          <ul className="socials">
            <li><img width="24" height="24" src={facebook} alt="facebook" /></li>
            <li><img width="24" height="24" src={ufo} alt="ufo" /></li>
            <li><img width="24" height="24" src={telegram} alt="telegram" /></li>
          </ul>
        </div>
  )
}

export default Footer