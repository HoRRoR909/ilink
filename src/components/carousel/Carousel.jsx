import React, {useState, useEffect, Children, cloneElement} from 'react'

import arrow from '../../resourses/img/icons/arrow.svg'

import './carousel.scss'

const PAGE_WIDTH = 531

const Carousel = ({children}) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      console.log(newOffset)
      console.log(pages.length)
      const maxOffset = -(PAGE_WIDTH * (pages.length - 2))
      
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child)  
      })
    )
  }, [children])

  return (
    <div className="main-container">
      <div className="window">
        <div className="all-pages-container" style={{transform: `translateX(${offset}px)`}}
          >{pages}
        </div>
      </div>
      <div className="arrows">
        <img width="56" height="56" src={arrow} alt="arrow" className="left_arrow" onClick={handleLeftArrowClick} />
        <img width="56" height="56" src={arrow} alt="arrow" className="right_arrow" onClick={handleRightArrowClick} />
      </div>
    </div>
  )
}

export default Carousel