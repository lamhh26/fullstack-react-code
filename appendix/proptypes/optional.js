import React from 'react'

class Component extends React.Component {
  static propTypes = {
    // Optional props:
    onStart: React.PropTypes.func,
    // Required props:
    onComplete: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired
  }

  startTimer = (seconds=5) => {
    const { onStart, onComplete } = this.props
    onStart()
    setTimeout(() => onComplete(), seconds)
  }

  render() {
    const { name } = this.props
    return (
      <div onClick={this.startTimer}>
        {name}
      </div>
    )
  }
}

export default Component
