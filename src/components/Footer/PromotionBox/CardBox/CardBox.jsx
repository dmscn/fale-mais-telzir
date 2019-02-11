import React, { Component } from 'react'
import classNames from 'classnames';
import Card from "@material-ui/core/Card";

import styles from './CardBox.module.css';

export type Props = {
  className?: string,
  title: string,
  descount: number,
  price: number,
  destac: boolean,
};

export default class CardBox extends Component<Props> {
  render() {
    const { title, descount, price, destac } = this.props;
    const style = destac ? styles.SpecialContainer : undefined;

    return (
      <Card className={classNames(styles.Container, style)}>
        <h3>{title}</h3>
        <p>Não paga os primeiros <span className={styles.MinDescount}>{descount}</span> minutos.</p>
        <p>
          R$ <span className={styles.Price}>{price}</span>
        </p>
      </Card>
    );
  }
}
