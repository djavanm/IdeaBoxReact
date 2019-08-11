import React from 'react';
import Ideas from './Ideas'
import Form from './Form'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
    this.addIdea = this.addIdea.bind(this)
    this.deleteIdea = this.deleteIdea.bind(this)
  }

  addIdea(newIdea) {
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
    console.log(this.state)
  }

  deleteIdea(id) {
    const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id)

    this.setState({
      ideas: filteredIdeas
    })
  }

  render() {
    return (
      <main>
        <h1>Idea Box</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}


