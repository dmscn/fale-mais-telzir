import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

import styles from './InputFields.module.css';

export default class InputFields extends Component {
  state = {
    name: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    return (
      <form className={styles.Container} noValidate autoComplete="off">
        <TextField
          required
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </form>     
    )
  }
}
