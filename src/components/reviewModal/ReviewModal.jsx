import React from 'react'

import cross from '../../resourses/img/icons/cross.svg'
import info from '../../resourses/img/icons/info.svg'
import plusWhite from '../../resourses/img/icons/plus-white.svg'
import jpg from '../../resourses/img/icons/jpg.svg'
import statusLine from '../../resourses/img/icons/status-line.svg'
import spinner from '../../resourses/img/icons/spinner.svg'

import './reviewModal.scss'

const ReviewModal = ({
  text, setText, addReview, 
  name, setName, modal, closeModal, 
  nameDirty, nameError, textDirty, 
  textError, setNameDirty, setNameError, 
  setTextDirty, setTextError, blurHandler, 
  nameHandler, textHandler, formValid
}) => {
  return (
    <div className="modal" style={modal ? {display: 'block'} : {display: 'none'}} >
      <div className="modal_dialog">
        <div className="modal_content">
          <div className="modal_header">
            <p className="modal_title">Отзыв</p>
            <img width="24" height="24" src={cross} alt="cross" onClick={closeModal} />
          </div>
          <p className="input_header">Как вас зовут?</p>
          <div className="name_photo">
            <input 
              placeholder="Имя Фамилия" 
              name="name" 
              type="text" 
              pattern="^[A-Za-zА-Яа-яЁё\s]"
              className="input_name" 
              value={name}
              onBlur={e => blurHandler(e)}
              onChange={e => nameHandler(e)}
            />
              <button className="">
                <img width="16" height="16" src={plusWhite} alt="plus" />
                <p>Загрузить фото</p>
              </button>
          </div>
          {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
          {/* <div className="photo_download">
            <img width="28" height="28" src={jpg} alt="plus" />
            <div className="name_status">
              <p>Photo 01-02-2021-20-33</p>
              <img width="168" height="4" src={statusLine} alt="plus" className="status_line"/>
            </div>
            <img width="18" height="18" src={spinner} alt="plus" className="spinner"/>
          </div> */}
          <p className="input_header">Всё ли вам понравилось?</p>
          <textarea 
            placeholder="Напишите пару слов о вашем опыте..." 
            name="text" 
            className="input_review"
            value={text}
            onBlur={e => blurHandler(e)}
            onChange={e => textHandler(e)}
          />
          {(textDirty && textError) && <div style={{color: 'red'}}>{textError}</div>}
          <div className="review_send">
            <button 
              className={formValid ? "add_button" : "add_button_disabled"}
              onClick={() => addReview()}
              disabled={!formValid}
              >Отправить отзыв
            </button>
            <div className="modal_info">
              <img width="17" height="17" src={info} alt="info" />
              <p>Все отзывы проходят модерацию в течение 2 часов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewModal