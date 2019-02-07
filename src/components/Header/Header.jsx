import React, { Component } from 'react'
import styles from './Header.module.css'
export default class Header extends Component {
  render() {
    return (
      <header className={styles.Container}>
        <span className={styles.Logo}>telzir</span>
      </header>
    )
  }
}
