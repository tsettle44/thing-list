import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import DeleteButton from './DeleteButton'
import './Thing.css'


class Thing extends Component  {

  componentDidMount() {
    if(!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  handleChanges = (ev) => {
    const { thing, saveThing } = this.props
    const feild = ev.currentTarget.getAttribute('name')
    thing[feild] = ev.target.value
    saveThing(thing)
  }

  blurOnEnter = (ev) => {
    if(ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
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
          name="name"
          html={thing.name}
          onChange={this.handleChanges}
          onKeyPress={this.blurOnEnter}
          ref={input => this.nameInput = input}
        />
        <input type="date" 
        onChange={this.handleChanges}
        name="due"
        defaultValue={thing.due} />
        <DeleteButton thing={thing} remove={removeThing} />
      </div>
    </li>
  )
}
}

export default Thing