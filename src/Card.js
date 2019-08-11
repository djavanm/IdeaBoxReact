import React from 'react'
import './Card.css'

const Card = (props) => {
  const { title, description, id } = props
  return (
    <article className='card' data-id={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>🗑</button>
    </article>
  )
}

export default Card