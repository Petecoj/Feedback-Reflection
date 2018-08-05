import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import FinishButton from '../FinishButton/FinishButton';



class FinalFeedbackPage extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/feedback', this.props.data)
    .then( response => {
    console.log('response', response);
    alert('Wahoo!  Thanks for doing feedback!');
    window.location.href= `/#/feelings`
  }).catch( (err) => {
      console.log(err);
      alert('Please make sure each form was was filled out!')
      
  })
}

  render() {
    return (
        <div>
        <Header/>
        <ProgressBar step={4}/>
        <FinishButton handleSubmit={this.handleSubmit} />
   
        </div>
    );
  }
}


const mapStateToProps = (reduxState) => {
   return  {data: reduxState.feedbackData}
}
       
 
  export default connect(mapStateToProps)(FinalFeedbackPage);