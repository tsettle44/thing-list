import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import DeleteButton from './DeleteButton'
import Datebtn from './Datebtn'
import './Thing.css'


class Thing extends Component  {

  componentDidMount() {
    if(!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  blurOnEnter = (ev) => {
    if(ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  date = (ev) => {
    const date = ev.currentTarget
    console.log(date)
  }

  checked = (ev) => {
    const { thing, checked, notChecked } = this.props
    if(ev.currentTarget.checked === true) {
      checked(thing)
    } else {
      notChecked(thing)
    }
  }


  render() {
    const { thing, saveThing, removeThing, checked, state } = this.props

  return (
    <li className="Thing">
      <input type="checkbox" value="on" 
          onClick={this.checked}
          ref={input => this.checkInput = input}
          defaultChecked={thing.completed}/>
      <div className="details">
        <ContentEditable
          className="name"
          html={thing.name}
          onChange={this.updateName}
          onKeyPress={this.blurOnEnter}
          ref={input => this.nameInput = input}
        />
        <Datebtn onChange={this.date} />
        <DeleteButton thing={thing} remove={removeThing} />
      </div>
    </li>
  )
}
}

export default Thing