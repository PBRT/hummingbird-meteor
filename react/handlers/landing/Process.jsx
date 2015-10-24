import { Component } from 'react'
import { Grid, Col } from 'react-bootstrap'
import { copy } from 'constants/landing.constant'
import { styles as UI } from 'constants/styles'
import Radium from 'radium'

var s = getStyle()
@Radium
export default class Process extends Component {
  static displayName = 'Process'
  constructor (props) {
    super(props)
    this.renderTiles = this.renderTiles.bind(this)
  }
  renderTiles () {
    return copy.process.map((item, index) => {
      return (
        <Col md={3} key={index} className='text-center' style={s.tile}>
          <div style={s.imageContainer}>
            <img src={require('./assets/' + item.imgSrc)} style={s.image}/>
          </div>
          <div style={s.title}>
            <span style={UI.fontLG}>{item.title}</span>
          </div>
          <div style={s.description}>{item.description}</div>
        </Col>
      )
    })
  }
  render () {
    return (
      <div style={s.container}>
        <div style={s.subcontainer}>
          <div style={s.sectionTitle}>
            <span style={UI.fontLG}>How it is working</span>
          </div>
          <Grid style={s.container}>
            {this.renderTiles()}
          </Grid>
        </div>
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: UI.primary
    },
    sectionTitle: {
      marginBottom: 40,
      color: UI.textLight,
      textAlign: 'center'
    },
    subcontainer: {
      padding: '50px 0px'
    },
    tile: {
      marginBottom: 30,
      color: UI.textLight
    },
    title: {
      marginTop: 20,
      textAlign: 'left'
    },
    description: {
      textAlign: 'left'
    }
  }
};
