import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const StyledTextField = withStyles({
  root:{
    color: 'red'
  }
})(TextField)

export default function UITextField(props) {
  return <StyledTextField {...props} inputProps={{color: 'red'}} />
}