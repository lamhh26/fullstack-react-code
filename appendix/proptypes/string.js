import React from 'react'

class Component extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  }

  render() {
    return (<div>{this.props.name}</div>)
  }
}

export default Component
