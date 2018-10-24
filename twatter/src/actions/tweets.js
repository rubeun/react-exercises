export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

// ### ACTION CREATORS ###
//
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}