/* global LocationsCollection */
/* global RequestsCollection */
/* global TripsCollection */

Meteor.publish('locations', () => { return LocationsCollection.find() })

Meteor.publish('requestsByMe', function () {
  return RequestsCollection.find({ userId: this.userId })
})

Meteor.publish('requestsForMe', function () {
  return RequestsCollection.find({ carrierId: this.userId })
})

Meteor.publish('trips', () => { return TripsCollection.find() })
