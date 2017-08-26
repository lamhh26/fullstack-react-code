import React from 'react'

class Container extends React.Component {
  static propTypes = {
    component: React.PropTypes.element.isRequired,
    children: React.PropTypes.element.isRequired
  }

  renderChild = (childData, index) => {
    return React.createElement(
      this.props.component,
      {}, // <~ child props
      childData // <~ child's children
    )
  }

  render() {
    return (
      <div className='container'>
        {React.Children.map(
          this.props.children,
          this.renderChild
        )}
      </div>
    )
  }
}


export default Container
