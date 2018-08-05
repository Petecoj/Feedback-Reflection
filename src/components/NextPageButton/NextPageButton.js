// Imports
import React, {Component, } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Styles for Next Page Button
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

// Create Next page Button component
class NextPageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

// sends data from page to redux and advances user to next page url
    handleNextClick = () => {
        this.props.dispatch({ type: this.props.path, payload: this.props.payload })
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

NextPageButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Exports Next Page Button
export default connect()(withStyles(styles)(NextPageButton));