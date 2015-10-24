import { Component, PropTypes } from 'react'

var s = getStyle()

export default class Section extends Component {
  static displayName = 'Section'
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }
  render () {
    return (
      <div style={s.container}>
        <div style={s.title}>{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {},
    title: {
      fontSize: 30,
      margin: '20px 0px 40px',
      textAlign: 'center'
    }
  }
};
