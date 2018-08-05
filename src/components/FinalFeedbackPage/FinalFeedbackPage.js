// Imports
import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import FinishButton from '../FinishButton/FinishButton';

// Create component
class FinalFeedbackPage extends Component {

// handle click for submit button and sends feedback data to database
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/feedback', this.props.data)
      .then(response => {
        alert('Wahoo!  Thanks for doing feedback!');
        window.location.href = `/#/feelings`
      }).catch((err) => {
      })
  }

  render() {
    return (
      <div>
        <Header />
        <ProgressBar step={4} />
        <FinishButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

// bring in data from redux on props in order to post it to database
const mapStateToProps = (reduxState) => {
  return { data: reduxState.feedbackData }
}

// Export component and two way connection to redux
export default connect(mapStateToProps)(FinalFeedbackPage);