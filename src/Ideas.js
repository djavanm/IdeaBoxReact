import React from 'react'
import Card from './Card'
import './Ideas.css'

const Ideas = ({ ideas }) => {
  const ideaCards = ideas.map((idea) => {
    return (
      <Card 
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  }) 

  return (
    <section className='ideas-container'>
      { ideaCards }
    </section>
  )
}

export default Ideas;