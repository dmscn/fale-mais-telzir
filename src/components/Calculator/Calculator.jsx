// @flow
import React, { Component } from 'react'
import styles from './Calculator.module.css'
import InputFields from './InputFields';
import Result from './Result';

export type State = {
  result?: any
}

export default class Calculator extends Component<null, State> {
  state = {
    result: undefined,
  }

  calculate = ({ tax, plan, time}) => {
    time = parseInt(time);

    let result = {};

    if(plan.descountMin >= time) {
      result.commonPrice = time * tax.pricePerMinute;
      result.promotionPrice = 0;
      this.setState({result});
    } else {
      result.commonPrice = time * tax.pricePerMinute;
      result.promotionPrice = (time - plan.descountMin) * plan.taxIncrease; 
      this.setState({
        result
      });
    }
  }
  
  render() {
    const { result } = this.state;

    if(!result) {
      return (
        <main className={styles.Container}>
            <header className={styles.Header}>
              <h2>Calcule o custo da sua ligação com nossos planos FaleMais</h2>
            </header>
            <InputFields onSubmit={this.calculate}/>
        </main>
      );
    }

    return (
      <main className={styles.Container}>
        <Result result={result} />
      </main>
    )
  }
}
