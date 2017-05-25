import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Login from './Login'
import SignOut from './SignOut'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base from './base'

class App extends Component {

  componentWillMount() {
   this.ref = base.syncState(
      'things', 
      {
        context: this,
        state: 'things'
      }
    )
  }

  state = {
    things: {}
  }

  checked = (thing) => {
    const things = {...this.state.things}
    things[thing.id].completed = true

    this.setState({ things })
  }

  notChecked = (thing) => {
    const things = {...this.state.things}
    things[thing.id].completed = false

    this.setState({ things })
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
      due: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      checked: this.checked,
      notChecked: this.notChecked,
      state: this.state
    }

    return (
      <div className="App">
        <Header />
        <SignOut />
        <AddThingButton addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          {...actions}
        />
      </div>
    );
  }
}

export default App;
