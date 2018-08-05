// Imports
import React, {Component, } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Styles for Finish Button
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

// Create Finish Button Component
class FinishButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.props.handleSubmit} variant="contained" color="primary" className={classes.button}>
                    Submit Feedback!
                </Button>
            </div>
        )
    }
}

FinishButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Export Finish Button Component
export default connect()(withStyles(styles)(FinishButton));