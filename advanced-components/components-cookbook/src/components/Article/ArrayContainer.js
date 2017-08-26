import React from 'react'

class Container extends React.Component {
  static propTypes = {
    component: React.PropTypes.element.isRequired,
    children: React.PropTypes.element.isRequired
  }

  render() {
    const arr =
      React.Children.toArray(this.props.children);

    return (
      <div className="container">
        {arr.sort((a, b) => a.id < b.id )}
      </div>
    )
  }
}

export default Container
