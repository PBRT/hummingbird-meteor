Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    user.profile = options.profile
    user.profile.createdAt = new Date()

    user.profile.facebookId = user.services.facebook.id
    user.profile.firstName = user.services.facebook.first_name
    user.profile.email = user.services.facebook.email
    user.profile.link = user.services.facebook.link
  }

  return user
})
