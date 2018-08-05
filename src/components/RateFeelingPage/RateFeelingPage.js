//Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import NextPageButton from '../NextPageButton/NextPageButton';
import ProgressBar from '../ProgressBar/ProgressBar'
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import RadioAnswerBar from '../RadioAnswerBar/RadioAnswerBar';

const styles = theme => ({
    root: {
        color: green[600],
        '&$checked': {
          color: green[500],
        },
      },
      checked: {},
      size: {
        width: 40,
        height: 40,
      },
      sizeIcon: {
        fontSize: 20,
      },
    });

class RateFeelingPage extends Component {
    constructor(props) {
        super(props);

       this.state = {
            selectedValue: '1',
          };
    }
    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };
    
    render() {
        return (
            <div>
                <Header />
                <ProgressBar step={0} />
                <RadioAnswerBar handleChange={this.handleChange}
                                selectedValue={this.state.selectedValue}
                />
                <NextPageButton nextPage={'understanding'} 
                                payload={this.state.selectedValue}
                                path={'FEELING'}
                />
            </div>
        );
    }
}

const StyledRateFeelingPage = withStyles(styles)(RateFeelingPage);

export default connect()(StyledRateFeelingPage)