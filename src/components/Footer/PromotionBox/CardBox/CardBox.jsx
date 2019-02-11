import React, { Component } from 'react'
import classNames from 'classnames';
import Card from "@material-ui/core/Card";

import styles from './CardBox.module.css';

export type Props = {
  className?: string,
  title: string,
  content: string,
  price: number,
};

export default class CardBox extends Component<Props> {
  render() {
    const { className, title, content, price } = this.props;

    return (
      <Card className={classNames(styles.Container, className)}>
        <h3>{title}</h3>
        <p>{content}</p>
        R$ <span className={styles.Price}>{price}</span>
      </Card>
    )
  }
}
