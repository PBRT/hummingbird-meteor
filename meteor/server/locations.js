/* global Locations */

Meteor.publish('locations', () => { return Locations.find() })

// Deny all user CRUD interactions by default.
