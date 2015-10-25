/* global Email */
/* global RequestsCollection */

const ENV = process.env.NODE_ENV

const PUBLIC_URL = (ENV === 'development')
  ? 'http://localhost:3000'
  : 'http://hummingbird.vararu.org'
const FROM_EMAIL = 'hummingbird@birds.vararu.org'

Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    user.profile = options.profile
    user.profile.createdAt = new Date()

    user.profile.facebookId = user.services.facebook.id
    user.profile.firstName = user.services.facebook.first_name
    user.profile.email = user.services.facebook.email
    user.profile.link = user.services.facebook.link
  }

  if (user.profile.email) {
    Email.send({
      from: FROM_EMAIL,
      to: user.profile.email,
      subject: 'Welcome to Hummingbird!',
      text: `O hai there!\n\n` +
        `You've just signed up for Hummingbird. Yay!\n\n` +
        `❤️,\n` +
        `the Hummingbird team`
    })
  }

  return user
})

var initial = true

RequestsCollection.find().observe({
  added: (doc) => {
    if (!initial) {
      const fromUser = Meteor.users.findOne(doc.userId)
      const toUser = Meteor.users.findOne(doc.carrierId)
      Email.send({
        from: FROM_EMAIL,
        to: toUser.profile.email,
        subject: 'You\'ve received a request on Hummingbird!',
        text: `O hai there!\n\n` +
          `<a href="${PUBLIC_URL}/users/${fromUser._id}">${fromUser.profile.firstName}</a> wants you to carry an item.\n\n` +
          `<a href="${PUBLIC_URL}/trips/${doc.tripId}">Review this request</a>, or <a href="${PUBLIC_URL}/users/${toUser._id}/trips">view all your trips</a>.\n\n` +
          `❤️,\n` +
          `the Hummingbird team`
      })
    }
  }
})

initial = false
