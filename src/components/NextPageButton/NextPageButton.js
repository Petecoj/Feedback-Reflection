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
    handleNextClick = () => {
        console.log('clicked', this.props.nextPage);
       
        this.props.dispatch(
            { type: this.props.path, payload: this.props.payload },
        )
        window.location.href= `/#/${this.props.nextPage}`;
      

    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.handleNextClick} variant="contained" color="primary" className={classes.button}>
                    Next
                   
                </Button>
            </div>
        )
    }
}

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(IconLabelButtons));