### As a SENDER, I want to send a small parcel from X to Y in the following month.

- Go to the website, log in.
- See a landing page with the search bar.
- Enter my SENDER info: small parcel, from X, to Y, following month, click on "Find carriers."
- Receive a list of results, items are CARRIERS with feedback/reviews, descriptions, their trip.
- I select somebody and click on "Contact," you get a modal with text to provide more info.
- Person changes to "Contacted."
- CARRIER receives notification (email/text/whatever) that he has received a request.
- CARRIER goes to website to review request(s), decides to decline/accept any number of them.
- CARRIER and SENDER both exchange contact information.
- Rest happens offline.
- endOfTrip()

### As a CARRIER, I want to advertise that I have space for some small parcels on my next trip so that I can help people out and get community cred for my future shipping needs.

- Go to website, log in.
- See a landing page with search bar, go to alternate flow that involves posting that I'm a CARRIER.
- Enter my CARRIER info: space available, from X, to Y, exact date/dates, click on "Post."
- Get redirected to my new trip page.
- Time passes.
- Receive emails that I have been contacted for my trip, go to trip page to review.
- Accept one request from SENDERS.
- Exchange personal info.
- Offline: meet with person, get item, go on my trip, drop item.
- endOfTrip()

endOfTrip() {
  - After the trip has occurred, CARRIER and SENDER are expected to exchange feedback. If this doesn't happen, remind them.
  - CARRIER gives SENDER feedback and vice-versa.
  - End of the journey.
}

#### Technical spec

- Facebook login.
- Database models:
  - Locations (id, lat, lng, info)
  - Messages (id, content, user_id)
  - Requests (id, from_user_id, trip_id, status, requested_size, description)
  - Reviews (id, from_user_id, to_user_id, trip_id, content, stars)
  - Trips (id, from_location_id, to_location_id, user_id, description, status, date, available_size)
  - Users (id, ...contact_info)
- Emailing system.

#### Incremental steps

- Login and Users.
- Landing page.
  - Sender Request search. (Filtered trips)
    - Search bar on landing page.
    - Results list.
      - SENDER Request creation flow.
- Small list of locations.
- User profile page.
- User requests view.
  - View requests.
- User trip view.
  - Create a new trip.
  - View trips.
    - View requests for the trip.
- Feedback creation view. (from user requests or user trips)

#### Cool ideas

- Hook into already established feedback on Airbnb, Ebay, sharing economy markets.

#### Edge cases

- When you accept a request as a CARRIER, decline all other ones.
