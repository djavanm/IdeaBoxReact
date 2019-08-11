import React from 'react'
import './Form.css'

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
    this.submitIdea = this.submitIdea.bind(this)
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  clearInputs() {
    this.setState({
      title: '',
      description: ''
    })
  }

  submitIdea(e) {
    e.preventDefault()
    const { title, description } = this.state
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='Title'
        name='title'
        value={this.state.title}
        onChange={(e) => this.handleChange(e)}
        />
        <input
        type='text'
        placeholder='Description'
        name='description'
        value={this.state.description}
        onChange={(e) => this.handleChange(e)}
        />
        <button onClick={(e) => this.submitIdea(e)}>SUBMIT</button>
      </form>
    )
  }
}
