import React from 'react'
import './Card.css'

const Card = (props) => {
  const { title, description, id, deleteIdea } = props
  return (
    <article className='card' data-id={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </article>
  )
}

export default Card