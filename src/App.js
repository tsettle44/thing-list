import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Login from './Login'
import SignOut from './SignOut'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base, { auth } from './base'

class App extends Component {
  state = {
    things: {},
    uid: null
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.offHandler({ user })
        }
      }
    )
  }

  setUpThings = () => {
    this.ref = base.syncState(
      `${this.state.uid}/things`, 
      {
        context: this,
        state: 'things'
      }
    )
  }

  offHandler= (authData) => {
    this.setState({ 
      uid: authData.user.uid},
      this.setUpThings
    )
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

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null }))
  }

  renderThings() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      checked: this.checked,
      notChecked: this.notChecked,
    }
    return(
      <div>
      <SignOut signOut={this.signOut} />
        <AddThingButton addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          {...actions}
        />
      </div>
    )
  }

  render() {
    

    return (
      <div className="App">
        <Header />
        { this.state.uid ? this.renderThings() : <Login offHandler={this.offHandler} /> }
      </div>
    );
  }
}

export default App;
