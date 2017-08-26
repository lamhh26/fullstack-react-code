import React from 'react'

class Component extends React.Component {
  static propTypes = {
    phoneNumber: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ])
  }

  render() {
    return (
      <div>
        <p>{this.props.phoneNumber}</p>
      </div>
    )
  }
}

export default Component
