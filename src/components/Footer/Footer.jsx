import React from 'react'

import styles from './Footer.module.css';
import PromotionBox from './PromotionBox';
import BottomNav from './BottomNav';

export default function Footer() {
  return (
    <footer className={styles.Container}>
      <PromotionBox />
      <BottomNav />
    </footer>
  )
}
