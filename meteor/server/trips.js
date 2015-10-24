/* global TripsCollection */

Meteor.publish('trips', () => {
  return TripsCollection.find()
})
