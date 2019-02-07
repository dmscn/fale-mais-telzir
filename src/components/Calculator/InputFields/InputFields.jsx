import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import plans from '../../../static/fale-mais-plans'
import taxes from '../../../static/taxes';

import styles from './InputFields.module.css';

export default class InputFields extends Component {
  state = {
    origin: taxes[0].origin,
    destiny: taxes[0].destiny,
    plan: plans[0].name,
  }

  submit = () => {
    console.log("Submitting: ", this.state);
    this.props.onSubmit(this.state);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    return (
      <form className={styles.Container} noValidate autoComplete="off">
        <div className={styles.InputBox}>
          <TextField
            className={styles.Input}
            required
            select
            label="DDD Origem"
            value={this.state.origin}
            onChange={this.handleChange("origin")}
            variant="outlined"
            margin="dense"
            SelectProps={{
              native: true
            }}
          >
            {taxes.map(tax => (
              <option key={tax.key} value={tax.origin}>
                {tax.origin}
              </option>
            ))}
          </TextField>

          <TextField
            className={styles.Input}
            required
            select
            label="DDD Destino"
            value={this.state.destiny}
            onChange={this.handleChange("destiny")}
            variant="outlined"
            margin="dense"
            SelectProps={{
              native: true
            }}
          >
            {taxes.map(tax => (
              <option key={tax.key} value={tax.destiny}>
                {tax.destiny}
              </option>
            ))}
          </TextField>

          <TextField
            className={styles.Input}
            required
            select
            label="Plano"
            value={this.state.plan}
            onChange={this.handleChange("plan")}
            variant="outlined"
            margin="dense"
            SelectProps={{
              native: true
            }}
          >
            {plans.map(plan => (
              <option key={plan.name} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </TextField>
        </div>

        <Button variant="outlined" className={styles.Button} onClick={this.submit}>
          Calcular
        </Button>
      </form>
    );
  }
}
