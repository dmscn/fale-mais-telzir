import React, { Component } from 'react'
import classNames from 'classnames';
import Card from "@material-ui/core/Card";

import styles from './CardBox.module.css';

export type Props = {
  className?: string,
  title: string,
  content: string,
  price: number,
  variant?: 'none' | 'special',
};

export default class CardBox extends Component<Props> {
  render() {
    const { title, content, price, variant = 'none' } = this.props;

    const style = variant === 'special' ? styles.SpecialContainer : undefined;

    return (
      <Card className={classNames(styles.Container, style)}>
        <h3>{title}</h3>
        <p>{content}</p>
        R$ <span className={styles.Price}>{price}</span>
      </Card>
    )
  }
}
