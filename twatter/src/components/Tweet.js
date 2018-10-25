import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
  render() {
    const { tweet } = this.props;
    
    if (tweet === null) {
      return <p>This Tweet doesn't exist</p>
    }

    console.log(this.props);
    
    return (
      <div className='tweet'>

      </div>
    )
  }
}

// Tweet needs authedUser, users, tweets from store. Tweet is also passed in id as prop (of Tweet to be displayed)
// note: formatTweet(tweet, author, authedUser, parentTweet) and returns formatted tweet in an object
function mapStateToProps({authedUser, users, tweets}, { id }) {
  const tweet = tweets[id];
  // check that the tweet is replying to another tweet
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet 
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet);