/* global LocationsCollection */
/* global TripsCollection */

Meteor.publish('locations', () => { return LocationsCollection.find() })

Meteor.publish('trips', () => { return TripsCollection.find() })
