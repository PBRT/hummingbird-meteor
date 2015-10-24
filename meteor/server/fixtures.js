/* global LocationsCollection */

Meteor.startup(() => {
  if (LocationsCollection.find().count() === 0) {
    const LOCATIONS = [
      { name: 'London' },
      { name: 'Paris' },
      { name: 'Rome' },
      { name: 'San Francisco' }
    ]

    console.log('No locations. Adding fixtures:', LOCATIONS)

    LOCATIONS.map(location => LocationsCollection.insert(location))
  }
})
