import React, {Component, } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});


class IconLabelButtons extends Component {
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

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(IconLabelButtons));