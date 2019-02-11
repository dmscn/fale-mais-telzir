// @flow
import React, { Component } from 'react'

import styles from './PromotionBox.module.css';
import CardBox from './CardBox';

export default class PromotionBox extends Component {
  render() {
    return (
      <section className={styles.Container}>
        <h3 className={styles.Header}>Escolha um de nossos planos</h3>

        <div className={styles.CardsContainer}>
          <CardBox
            title="FaleMais"
            content="LASJndLASJKdnASLKJ"
            price={30}
          />
          <CardBox
            className={styles.SpecialCard}
            title="FaleMais"
            content="LASJndLASJKdnASLKJ"
            price={30}
          />
          <CardBox
            title="FaleMais"
            content="LASJndLASJKdnASLKJ"
            price={30}
          />
        </div>
      </section>
    );
  }
}
