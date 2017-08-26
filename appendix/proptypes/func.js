import React from 'react'

class Component extends React.Component {
  static propTypes = {
    onPress: React.PropTypes.func
  }

  render() {
    return (
      <div onClick={this.props.onPress}>
        Press me
      </div>
    )
  }
}

export default Component
