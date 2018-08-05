import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class OutlinedButtons extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.props.deleteFeedback} variant="outlined" className={classes.button}>
                    Delete
                 </Button>
                 
            </div>
        );
    }
}

OutlinedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);