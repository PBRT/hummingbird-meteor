import { Component } from 'react'

// var s = getStyle()

export default class Process extends Component {
  static displayName = 'Process'

  render () {
    return (
      <div>
        <div>How it is working</div>
        <div>{this.renderTiles()}</div>
      </div>
    )
  }
}

// function getStyle () {
//   return {
//     heroshot: {
//       height: 500,
//       backgroundImage: 'url(' + require('./hero.jpg') + ')',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       WebkitFilter: 'grayscale(1)'
//     }
//   }
// };
