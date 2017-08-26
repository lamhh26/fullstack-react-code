import React from 'react'

class Component extends React.Component {
  static propTypes = {
    totalCount: React.PropTypes.number
  }

  render() {
    return (<div>{this.props.totalCount}</div>)
  }
}

export default Component
