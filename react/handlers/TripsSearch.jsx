/* global TripsCollection */
/* global LocationsCollection */
/* global RequestsCollection */
import { Component, PropTypes } from 'react'
import reactMixin from 'react-mixin'
import Search from 'components/search'
import { styles as UI } from 'constants/styles'
import { History } from 'react-router'
import Trip from 'components/trip'

var s = getStyles()

@reactMixin.decorate(History)
@reactMixin.decorate(ReactMeteorData)
export default class TripsSearch extends Component {
  static displayName = 'TripsSearch'
  static propTypes = {
    location: PropTypes.shape({
      query: PropTypes.object.isRequired
    }).isRequired
  }
  constructor (props) {
    super(props)
    this.renderResults = this.renderResults.bind(this)
  }

  renderResults () {
    return this.data.trips.map((item) => {
      const [fromLocation] = this.data.locations.filter(location => location._id === item.fromLocationId)
      const [toLocation] = this.data.locations.filter(location => location._id === item.toLocationId)
      return <Trip trip={item} key={item._id} fromLocation={fromLocation} toLocation={toLocation}/>
    })
  }
  getMeteorData () {
    return {
      trips: TripsCollection.find(this.props.location.query).fetch(),
      locations: LocationsCollection.find().fetch(),
      requests: RequestsCollection.find().fetch(),
      users: Meteor.users.find().fetch()
    }
  }

  render () {
    let params = this.props.location.query
    const [fromLocation] = this.data.locations.filter(location => location._id === params.fromLocationId)
    console.log(fromLocation, toLocation)
    const [toLocation] = this.data.locations.filter(location => location._id === params.toLocationId)

    if (!fromLocation || !toLocation) {
      return <div>No results</div>
    } else {
      return <div>
        <h2> Results for trips from
          <b> {fromLocation.name}</b> to
          <b> {toLocation.name} </b>
          {params.date ? <span>the {params.date.toString()} </span> : ''}
          {params.availableSize
            ? <span>for a <b> {params.availableSize.toUpperCase()} parcel</b></span> : ''}
          </h2>
        <Search />
        <div style={s.results}>{this.renderResults()}</div>
      </div>
    }
  }
}

function getStyles () {
  return {
    tripContainer: {
      padding: 20,
      border: '1px solid',
      borderColor: UI.primary,
      backgroundColor: UI.widgetBg,
      marginBottom: 20
    },
    results: {
      marginTop: 40
    }
  }
}
