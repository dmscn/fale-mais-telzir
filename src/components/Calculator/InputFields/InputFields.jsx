import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import plans from '../../../static/fale-mais-plans'
import taxes from '../../../static/taxes';

import styles from './InputFields.module.css';

import UITextField from '../../UI/TextField';

export default class InputFields extends Component {
  state = {
    origin: taxes[0].origin,
    destiny: taxes[0].destiny,
    plan: plans[0].name,
    time: undefined,
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
    // removing duplicates
    const origins = Array.from(new Set(taxes.map(tax => tax.origin)));
    const destinations = Array.from(new Set(taxes.map(tax => tax.destiny)));

    return (
      <form className={styles.Container} noValidate autoComplete="off">
        <div className={styles.InputBox}>
          <UITextField
            className={styles.Input}
            required
            select
            label="DDD Origem"
            value={this.state.origin}
            onChange={this.handleChange("origin")}
            SelectProps={{
              native: true
            }}
          >
            {origins.map(origin => (
              <option key={origin} value={origin}>
                {origin}
              </option>
            ))}
          </UITextField>

          <UITextField
            className={styles.Input}
            required
            select
            label="DDD Destino"
            value={this.state.destiny}
            onChange={this.handleChange("destiny")}
            SelectProps={{
              native: true
            }}
          >
            {destinations.map(destiny => (
              <option key={destiny} value={destiny}>
                {destiny}
              </option>
            ))}
          </UITextField>

          <UITextField
            className={styles.Input}
            required
            type="number"
            label="Tempo"
            placeholder="Tempo de ligação em minutos"
            value={this.state.time}
            onChange={this.handleChange("time")}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <UITextField
            className={styles.Input}
            required
            select
            label="Plano"
            value={this.state.plan}
            onChange={this.handleChange("plan")}
            SelectProps={{
              native: true
            }}
          >
            {plans.map(plan => (
              <option key={plan.name} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </UITextField>
        </div>

        <Button
          variant="outlined"
          className={styles.Button}
          onClick={this.submit}
        >
          Calcular
        </Button>
      </form>
    );
  }
}
