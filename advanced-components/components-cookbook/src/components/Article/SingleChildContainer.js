import React, { PropTypes } from 'react'

class Container extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

export default Container
