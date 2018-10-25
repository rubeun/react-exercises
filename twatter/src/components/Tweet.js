import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';
import { 
  TiArrowBackOutline, 
  TiHeartOutline, 
  TiHeartFullOutline
} from 'react-icons/ti/index';
import { handleToggleTweet } from '../actions/tweets';

class Tweet extends Component {
  // Redirect to Parent Tweet
  toParent = (e, id) => {
    e.preventDefault();
    // todo: redirect to parent tweet
  }

  // Handles Like clicks
  handleLike = (e) => {
    e.preventDefault();
    
    const { dispatch, tweet, authedUser } = this.props;

    dispatch(handleToggleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }))
  }

  render() {
    const { tweet } = this.props;
    
    if (tweet === null) {
      return <p>This Tweet doesn't exist</p>
    }
    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, parent
    } = tweet;

    return (
      <div className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button 
                className='replying-to'
                onClick={(e) => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={this.handleLike}>
              {hasLiked === true
                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                : <TiHeartOutline className='tweet-icon' />}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
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