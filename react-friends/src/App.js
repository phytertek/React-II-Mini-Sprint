import React, { Component } from 'react';

import { people } from './people.js'

import { PeopleList } from './Components/PeopleList'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      people: []
    }
  }
  componentDidMount = () => {
    const newState = Object.assign({}, this.state, {people})
    this.setState(() => newState)
  }
  render() {
    const { people } = this.state
    return (
      <div className="App">
        <PeopleList people={people}/>
      </div>
    );
  }
}

export default App;
