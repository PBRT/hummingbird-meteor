/* global LocationsCollection */

Meteor.publish('locations', () => { return LocationsCollection.find() })

// Deny all user CRUD interactions by default.
