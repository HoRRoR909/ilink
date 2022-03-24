import React, { useState, useEffect }  from 'react'

import {addReview} from '../../redux/reviewSlice'
import { useDispatch, useSelector } from 'react-redux'

import Carousel from '../carousel/Carousel'
import ReviewItem from '../reviewItem/ReviewItem'
import ReviewModal from '../reviewModal/ReviewModal'

import emptyAvatar from '../../resourses/img/icons/empty-avatar.svg'
import messageSuccess from '../../resourses/img/message-success.svg'
import plusWhite from '../../resourses/img/icons/plus-white.svg'

import './reviews.scss'

const Reviews = () => {
  const reviews = useSelector(state => state.reviewReducer.reviews)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [modal, setModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [textDirty, setTextDirty] = useState(false)
  const [nameError, setNameError] = useState('Имя не может быть пустым')
  const [textError, setTextError] = useState('Отзыв не может быть пустым')
  const [formValid, setFormValid] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (nameError || textError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, textError])

  const newReview = () => {
    dispatch(addReview({text, name}))
    setModal(false)
    setSuccessMessage(true)
    setFormValid(false)
    setText('')
    setName('')
  }

  const openModal = () => {
    setModal(true)
    console.log(modal)
  }

  const closeModal = () => {
    setModal(false)
  }

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'name': 
        setNameDirty(true)
        break
      case 'text': 
        setTextDirty(true)
        break
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 30 ) {
      setNameError('Имя должно быть длиннее 3 и короче 40 символов')
      if(!e.target.value) {
        setNameError('Имя не может быть пустым')
      }
    } else {
      setNameError('')
    }
  }

  const textHandler = (e) => {
    setText(e.target.value)
    if(e.target.value.length < 20 || e.target.value.length > 200 ) {
      setTextError('Отзыв должен быть длиннее 20 и короче 200 символов')
      if(!e.target.value) {
        setNameError('Отзыв не может быть пустым')
      }
    } else {
      setTextError('')
    }
  }

  return (
    <div className="reviews_wrapper">
      <div className="reviews">
        <div className="reviews_add">
          <p className="reviews_add_head" >Отзывы</p>
          <button className="reviews_add_button" onClick={openModal} >
            <img width="16" height="16" src={plusWhite} alt="plus" />
            <p>Добавить отзыв</p>
          </button>
        </div>
        <div className="carousel_wrapper">
          <div className="carousel__main-container">
            <Carousel >
              {reviews.map(review => <ReviewItem key={review.id} {...review}/>)}
            </Carousel>
          </div>
          <div className="message_wrapper" style={successMessage ? {display: 'block'} : {display: 'none'}}>
            <img width="438" height="174" src={messageSuccess} alt="message" />
            <div className="message_close" onClick={() => setSuccessMessage(false)}></div>
          </div>
        </div>
      </div>
      <ReviewModal 
        modal={modal} 
        closeModal={closeModal}
        addReview={newReview} 
        text={text} 
        setText={setText} 
        name={name} 
        setName={setName} 
        nameDirty={nameDirty}
        nameError={nameError}
        textDirty={textDirty}
        textError={textError}
        setNameDirty={setNameDirty}
        setNameError={setNameError}
        setTextDirty={setTextDirty}
        setTextError={setTextError}
        blurHandler={blurHandler}
        nameHandler={nameHandler}
        textHandler={textHandler}
        formValid={formValid}
      />
    </div>
  )
}

export default Reviews