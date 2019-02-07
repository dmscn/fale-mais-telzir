import React, { Component } from 'react'
import styles from './Calculator.module.css'
import InputFields from './InputFields';

export default class Calculator extends Component {
  calculate = ({ origin, destiny, plan, time}) => {
    console.log(`${origin}, ${destiny}, ${plan}, ${time}`);
  }
  render() {
    return (
      <main className={styles.Container}>
          <InputFields onSubmit={this.calculate}/>
      </main>
    )
  }
}
