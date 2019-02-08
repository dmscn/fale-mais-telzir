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
    time: 0,
  }

  submit = () => {
    const { origin, destiny, time } = this.state;

    if(time <= 0) {
      this.setState({
        error: 'O tempo deve ser maior que 0 minutos.'
      })
    } else {
      const result = {
        plan: plans.find(plan => plan.name === this.state.plan),
        tax: taxes.find(tax => {
          if(tax.origin === origin && tax.destiny === destiny) return tax;
          return false;
        }),
        time,
      }
      this.props.onSubmit(result);
    }
  }

  handleKeyPress = event => {
    var code = event.keyCode || event.which;
    if (code === 13) this.submit();
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
      <form className={styles.Container} noValidate autoComplete="off" onKeyPress={this.handleKeyPress}>
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
            error={this.state.error}
            helperText={this.state.error}
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
