import React, { Component, PropTypes } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentValue: this.props.initialValue
    }
  }

  render() {
    return (
      <div>Current value</div>
    )
  }
}

export default Counter
