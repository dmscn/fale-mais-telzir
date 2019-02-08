// @flow
import React, { Component } from 'react'
import classNames from 'classnames';
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";

import styles from './Result.module.css';

export type Props = {
  result: any
}

export default class Result extends Component<Props> {
  formatCurrency = value => {
    if(Number.isInteger(value)) return value.toString();
    return value.toFixed(2).toString().replace('.', ',');
  }
  
  render() {
    const { result } = this.props;
    return (
      <section className={styles.Container}>
        <Card className={styles.Card}>
          <h3>Preço normal</h3>
          <p>
            R$ <span className={styles.Price}>{this.formatCurrency(result.commonPrice)}</span>
          </p>
          <Icon style={{ fontSize: "2em", color: "#B00020" }}>
            thumb_down
          </Icon>
        </Card>

        <Card className={classNames(styles.Card, styles.FaleMaisCard)}>
          <h3>Preço com FaleMais</h3>
          <p>
            R$ <span className={styles.Price}>{this.formatCurrency(result.promotionPrice)}</span>
          </p>
          <Icon style={{ fontSize: "2em", color: "#4CAF50" }}>
            thumb_up
          </Icon>
        </Card>
      </section>
    );
  }
}
