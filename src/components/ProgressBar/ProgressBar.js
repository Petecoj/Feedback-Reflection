//Imports
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

// Styles for Stepper Progress Bar
const styles = theme => ({

  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

// Provide each step inside Progress bar
function getSteps() {
  return ['Feelings', 'Understanding', 'Support', 'Comments', 'Complete'];
}

// Provide text to display accordingly for each step above
function getStepContent(step) {
  switch (step) {
    case 0:
      return 'How are you feeling about everything?';
    case 1:
      return 'What is your understanding level?';
    case 2:
      return 'How supported do you feel?';
    case 3:
      return 'Any comments or concerns?'
      case 4:
      return 'Thanks for your feedback!'
    default:
      return 'Unknown step';
  }
}

// Create Stepper Progress Bar Component
class ProgressBar extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
  };


  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

// loops through each step provides message and moves step marker     
    return (
      <div className={classes.root}>
        <Stepper activeStep={this.props.step}>
          {steps.map((label, index) => {
            const props = {};
           
            return (
              <Step key={label} {...props}>
                <StepLabel >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(this.props.step)}</Typography>
              <div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object,
};

// Exports Progress Bar Component
export default withStyles(styles)(ProgressBar);