// @flow
import React, { Component } from 'react'

import styles from './PromotionBox.module.css';
import plans from '../../../static/fale-mais-plans';

import CardBox from './CardBox';


export default class PromotionBox extends Component {
  render() {
    return (
      <section className={styles.Container}>
        <h3 className={styles.Header}>Escolha um de nossos planos</h3>

        <div className={styles.CardsContainer}>
          {plans.map(plan => (
            <CardBox
              destac={plan.name === 'FaleMais 60'}
              descount={plan.descountMin}
              title={plan.name}
              price={plan.descountMin}
            />
          ))}
        </div>
      </section>
    );
  }
}