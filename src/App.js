import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThings from './AddThings'

class App extends Component {
  constructor(props) {
    super(props)
    let id = 4
  }

  state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'Bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
    }
  }

  addItem = (add) => {
    const state = {...this.state}
    let things = Object.keys(state.things).length
    let id = things + 1
    const thingId = 'thing-' + id
    const thing = {
      things: {
        id: thingId,
        name: this.ThingList
      }
    }

    console.log(this.ThingList)

    state.things[thingId] = thing.things
    this.setState(state, () => console.log(this.state))

  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddThings add={this.addItem}/>
        <ThingList things={this.state.things} />
      </div>
    );
  }
}

export default App;
