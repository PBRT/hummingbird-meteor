/* global RequestsCollection */
/* global TripsCollection */

TripsCollection.allow({
  insert: (userId, doc) => {
    // TODO: Make sure fromLocationId and toLocationId are valid and exist in the database and distinct.
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

RequestsCollection.allow({
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
