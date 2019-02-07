import React, { Component } from 'react'
import styles from './Calculator.module.css'
import InputFields from './InputFields';

export default class Calculator extends Component {
  render() {
    return (
      <main className={styles.Container}>
          <InputFields />
      </main>
    )
  }
}
