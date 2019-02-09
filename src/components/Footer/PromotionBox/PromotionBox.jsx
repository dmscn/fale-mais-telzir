// @flow
import React, { Component } from 'react'
import classNames from 'classnames';
import Card from "@material-ui/core/Card";

import styles from './PromotionBox.module.css';

export default class PromotionBox extends Component {
  render() {
    return (
      <section className={styles.Container}>

        <h3 className={styles.Header}>Escolha um de nossos planos</h3>

        <div className={styles.CardBox}>
          <Card className={styles.Card}>Card1</Card>

          <Card className={classNames(styles.Card, styles.SpecialCard)}>Card2</Card>

          <Card className={styles.Card}>Card3</Card>        
        </div>


      </section>
    );
  }
}
