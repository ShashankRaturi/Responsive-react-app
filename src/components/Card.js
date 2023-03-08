import React from 'react'
import CardItem from './CardItem'

function Card() {
  return (
    <div className='cards'>
      <h1>CHECK OUT THE EPIC DESTINATIONS!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__item">
                <CardItem/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
