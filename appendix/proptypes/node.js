import React from 'react'

class Component extends React.Component {
  static propTypes = {
    icon: React.PropTypes.node
  }

  render() {
    const { icon } = this.props
    return (
      <div>
        {icon}
      </div>
    )
  }
}

export default Component
