import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import { Redirect } from 'react-router-dom';

class NewTweet extends Component {
  // local state for text entry (no need for store)
  state = {
    text: '',
    toHome: false
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
      text: '',
      toHome: id ? false : true  // only go to home if no id (new tweet page), else stay
    }))
  }

  render() {
    const { text, toHome } = this.state;
    
    if (toHome === true) {
      return <Redirect to='/' />
    }

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