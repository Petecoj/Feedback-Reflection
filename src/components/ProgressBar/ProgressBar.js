import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Feelings', 'Understanding', 'Support', 'Comments', 'Complete'];
}

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
      return 'Thanks for your feedback!?'
    default:
      return 'Unknown step';
  }
}

class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
  };




  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={this.props.step}>
          {steps.map((label, index) => {
            const props = {};
           
           
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
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
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
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

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLinearStepper);