/* global RequestsCollection */
import { Component } from 'react'
import { Grid, Col, Image, Button } from 'react-bootstrap'
import { styles as UI } from 'constants/styles'
import PropTypes from 'lib/propTypes'
import reactMixin from 'react-mixin'

var s = getStyle()

const getFacebookPicture = function (id) {
  return `http://graph.facebook.com/${id}/picture/?type=large`
}

@reactMixin.decorate(ReactMeteorData)
export default class Request extends Component {
  static displayName = 'Request'
  static propTypes = {
    request: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.updateRequest = this.updateRequest.bind(this)
  }
  getMeteorData () {
    return {
      sender: Meteor.users.findOne(this.props.request.userId)
    }
  }
  updateRequest (val) {
    RequestsCollection.update({_id: this.props.request._id}, {status: val})
  }
  render () {
    return (
      <div style={s.container}>
        <Grid>
          <Col sm={2} style={s.col} className='text-center'>
            <Image responsive style={s.image} src={ getFacebookPicture(this.data.sender.profile.facebookId) } alt='Profile picture' />
            <div>Mr or Miss {this.data.sender.profile.name}</div>
          </Col>
          <Col sm={4} style={s.col}>
            <div>Description</div>
            <div>{this.props.request.description}</div>
          </Col>
          <Col sm={4} style={s.col}>
            <Button bsStyle='success' style={{marginRight: 20}} onClick={this.updateRequest.bind(null, 1)}>Accept</Button>
            <Button bsStyle='danger' onClick={this.updateRequest.bind(null, 2)}>Decline</Button>
          </Col>
        </Grid>
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: UI.whiteBg,
      color: UI.textLight,
      textAlign: 'center',
      border: '1px solid'
    },
    col: {
      margin: '20px auto'
    },
    image: {
      width: 50
    }
  }
}
