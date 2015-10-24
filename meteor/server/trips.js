/* global TripsCollection */

Meteor.publish('trips', () => {
  return TripsCollection.find()
})

TripsCollection.allow({
  insert: (userId, doc) => {
    const isLoggedIn = userId
    const isOwner = doc.userId === userId
    const noCustomId = !doc._id
    return isLoggedIn && isOwner && noCustomId
  },
  update: (userId, doc, fields) => {
    const isOwner = doc.userId === userId
    const dontChangeUserId = _.contains(fields, 'userId')
    return isOwner && dontChangeUserId
  },
  remove: (userId, doc) => {
    const isOwner = doc.userId === userId
    return isOwner
  }
})
