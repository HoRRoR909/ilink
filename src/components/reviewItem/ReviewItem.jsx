import React from 'react'

import emptyAvatar from '../../resourses/img/icons/empty-avatar.svg'

import './reviewItem.scss'

const ReviewItem = ({name, photo, text, date}) => {
  return (
      <div className="review_wrapper">
        <div className="review_header">
          <div className="reviewer">
            <img width="52" height="52" src={emptyAvatar} alt="emptyAvatar" className="empty-avatar" />
            
            <p>{name}</p>
          </div>
          <div className="date_wrapper">
            <p className="date">{date}</p>
          </div>
        </div>
        <p className="review_text">{text}</p>
      </div>
  )
}

export default ReviewItem