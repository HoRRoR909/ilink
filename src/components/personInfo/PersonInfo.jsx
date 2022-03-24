import React, {useState} from 'react'

import userPhoto from '../../resourses/img/konstantin.jpg'
import male from '../../resourses/img/icons/male.svg'

import './personInfo.scss'

const PersonInfo = () => {

  const [info, setInfo] = useState(false)
  const openInfo = () => {
    setInfo(!info)
    console.log(info)
  }

  return (
    <>
      <div className="welcome">
        <h1>Добро пожаловать <br/> в академию!</h1>
      </div>
      <div className="person">
        <img className="person_photo" width="519" height="383" src={userPhoto} alt="user-avatar" />
        <div className="person_info">
          <div className="name_birthday">
            <p className="person_name">Константин Осокин</p>
            <p className="birthday">04.10.1994</p>
          </div>
          <ul className="person_info_ul">
            <li><b>Город:</b> &nbsp; Томск</li>
            <li><b>Пол:</b> &nbsp; Мужской 
              <img width="20" height="30" src={male} alt="male" />
            </li>
            <li><b>Возраст:</b> &nbsp; 27</li>
          </ul>
          <p className="person_info_about" ><b>О себе:</b> Всем привет, меня зовут Константин, мне 27 лет. Учился в Томском политехническом университете на направлении "технология и автоматизация машиностроительных производств". <br/>
          &nbsp; С 2017г по 2019г работал инженером-проектировщиком, проектировал вентиляционные системы и системы кондиционирования  для промышленных объектов. <br/>
          &nbsp; В 2019г решил уйти в бизнес, всё шло неплохо, но не нравилось. Так было принято решение закрыть свое производство и войти в IT :) 
            <button className="info_button" onClick={openInfo} >Доп. инфо</button>
          </p>
          
        </div>
      </div>
      <div className="adv_info" style={info ? {display: 'block'} : {display: 'none'}}>
        
          <p className="adv_person_info_about"  >Информация об этой работе: <br/>
          В последний момент узнал об этой академии, поэтому не успел полность доделать весь функционал. Что не сделано:<br/>
          Приложение не будет корректно отображаться на экранах шириной менее 1440px. Слайдер полностью рабочий, но без кнопок навигации снизу. Отзывы добавляются коректно, но без фото. Вроде бы header при скролле должен менять стиль - этого нет.
          Ну и из-за спешки на код временами больно смотреть, я это и сам понимаю. Просьба понять и простить.
          </p>
      </div>
    </>
  )
}

export default PersonInfo