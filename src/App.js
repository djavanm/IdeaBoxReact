import React from 'react';
import Ideas from './Ideas'

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
  }
  render() {
    return (
      <main>
        <h1>Idea Box</h1>
        <Ideas ideas={this.state.ideas} />
      </main>
    )
  }
}


