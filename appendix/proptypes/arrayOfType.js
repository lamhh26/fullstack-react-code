import React from 'react'

class Component extends React.Component {
  static propTypes = {
    authors: React.PropTypes.arrayOf(React.PropTypes.object)
  }

  render() {
    const { authors } = this.props
    return (
      <div>
        {authors && authors.map(author => {
          <AuthorCard author={author} />
        })}
      </div>
    )
  }
}

export default Component
