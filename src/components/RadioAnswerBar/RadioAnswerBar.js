import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
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
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: '1',
  };


  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.props.selectedValue === '1'}
          onChange={this.props.handleChange}
          value='1'
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.props.selectedValue === '2'}
          onChange={this.props.handleChange}
          value='2'
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={this.props.selectedValue === '3'}
          onChange={this.props.handleChange}
          value="3"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        <Radio
          checked={this.props.selectedValue === '4'}
          onChange={this.props.handleChange}
          value="4"
          color="default"
          name="radio-button-demo"
          aria-label="D"
        />
        <Radio
          checked={this.props.selectedValue === '5'}
          onChange={this.props.handleChange}
          value="5"
          color="default"
          name="radio-button-demo"
          aria-label="E"
          className={classes.size}
          icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
          checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
        />
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);