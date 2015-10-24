/* global Locations */

Meteor.startup(() => {
  if (Locations.find().count() === 0) {
    const LOCATIONS = [
      { name: 'London' },
      { name: 'Paris' },
      { name: 'Rome' },
      { name: 'San Francisco' }
    ]

    console.log('No locations. Adding fixtures:', LOCATIONS)

    LOCATIONS.map(location => Locations.insert(location))
  }
})
