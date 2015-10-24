import { PropTypes as ReactPropTypes } from 'react'

const PropTypes = Object.create(ReactPropTypes)

PropTypes.hb = {}

PropTypes.hb.user = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date).isRequired,
    email: PropTypes.string.isRequired,
    facebookId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
})

export default PropTypes
