
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import NextPageButton from '../NextPageButton/NextPageButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import RadioAnswerBar from '../RadioAnswerBar/RadioAnswerBar';



class RateSupportPage extends Component {
    constructor() {
        super()
        this.state = {
            selectedValue: '1',
        }
    } 

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
        
      };
      
  
  render() {
    console.log(this.state.selectedValue);
    return (
        <div>
        <Header/>
        <ProgressBar step={2}/>
        <RadioAnswerBar handleChange={this.handleChange}
                        selectedValue={this.state.selectedValue}
        />
        <NextPageButton  nextPage={'comments'}
                         payload={this.state.selectedValue}
                         path={'SUPPORT'}
        />
   
        </div>
    );
  }
}



  
  export default connect()(RateSupportPage);