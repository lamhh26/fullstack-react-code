import React from 'react'

class Component extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  }

  render() {
    return (<div>{this.props.name}</div>)
  }
}

Component.propTypes = {
  name: React.PropTypes.string
}

export default Component
