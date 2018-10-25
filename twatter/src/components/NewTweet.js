import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

class NewTweet extends Component {
  // local state for text entry (no need for store)
  state = {
    text: ''
  }

  // handle state change when user types in textbox
  handleChange = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }))
  }

  // handle adding new tweet on submit, then clear text box.
  handleSubmit = (e) => {
    e.preventDefault();

    const { text } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleAddTweet(text, id));
    
    this.setState(() => ({
      text: ''
    }))
  }

  render() {
    const { text } = this.state;
    
    {/* todo: Redirect to / if submitted */}

    // remaining characters in users tweet.
    const tweetLeft = 280 - text.length;

    return (
      <div>
        <h3 className='center'>Compose New Twat</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}
          >
            Submit
          </button>
        </form>  
      </div>
    )
  }
}

export default connect()(NewTweet);