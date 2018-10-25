import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='tweet'>

      </div>
    )
  }
}

// Tweet needs authedUser, users, tweets from store. Tweet is also passed in id as prop (from parent)
// note: formatTweet(tweet, author, authedUser, parentTweet) and returns formatted tweet in an object
function mapStateToProps({authedUser, users, tweets}, { id }) {
  const tweet = tweets[id];

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  }
}

export default connect(mapStateToProps)(Tweet);