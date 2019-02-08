//  @flow
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme: any): any => ({
  root: {
    marginBottom: ".5em"
  },

  cssLabel: {
    "&$cssFocused": {
      color: "#2b2b2b !important"
    }
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#2b2b2b !important"
    }
  },

  cssFocused: {},
  notchedOutline: {}
});

function UITextField(props: any) {
  const { classes } = props;
  return (
    <TextField
      variant="outlined"
      margin="dense"
      {...props}
      className={classNames(props.classes.root, props.className)}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      }}
    >
      {props.children || undefined}
    </TextField>
  );
}

UITextField.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(UITextField);