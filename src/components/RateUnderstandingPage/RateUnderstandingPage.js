//Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import NextPageButton from '../NextPageButton/NextPageButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import RadioAnswerBar from '../RadioAnswerBar/RadioAnswerBar';

//Create Component 
class RateUnderstandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: '1',
        }
    }
//Event handler for radio bar
    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      
    };


    render() {
        return (
            <div>
                <Header />
                <ProgressBar step={1} />
                <RadioAnswerBar handleChange={this.handleChange}
                                selectedValue={this.state.selectedValue}
                />
                <NextPageButton nextPage={'support'} 
                                payload={this.state.selectedValue}
                                path={'UNDERSTANDING'}
                />

            </div>
        );
    }
}

// Export Component
export default connect()(RateUnderstandingPage);