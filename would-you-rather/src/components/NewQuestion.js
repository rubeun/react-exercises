import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
  // local state for text entry (no need for store)
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  // handle state change when user types in textbox
  handleChange1 = (e) => {
    const optionOneText = e.target.value;

    this.setState(() => ({
      optionOneText
    }))
  }
  handleChange2 = (e) => {
    const optionTwoText = e.target.value;

    this.setState(() => ({
      optionTwoText
    }))
  }

  // handle adding new tweet on submit, then clear text box.
  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true  // go home after question added
    }))
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;
    
    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Add New Question</h3>
        <p className='center'>Would you rather...</p>
        <form className='new-question center' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option 1 ?"
            value={optionOneText}
            onChange={this.handleChange1}
            className='textarea'
            maxLength={100}
            autoFocus
          /><br />
          <textarea
            placeholder="Option 2 ?"
            value={optionTwoText}
            onChange={this.handleChange2}
            className='textarea'
            maxLength={100}
          /><br />
          <button
            className='btn'
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}
          >
            Add
          </button>
        </form>  
      </div>
    )
  }
}

export default connect()(NewQuestion);