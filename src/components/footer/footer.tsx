import React from 'react';

import {Telegram} from '@mui/icons-material';
import styles from './footer.module.css';
import { Button, ThemeProvider } from '@mui/material';
import {themeFooter} from '../../utils/constants/style-constants';

export const Footer: React.FC<{isTransparent: boolean}> = (props) => {

  return (
    <footer className={props.isTransparent ? `${styles.footer} ${styles['footer_transparent']}` : `${styles.footer}`}>
      <div className={styles.content}>
        <p className={styles.logo}>© Карьерный Трекер</p>

        <p className={styles.text}>для работодателей, 2023</p>
      </div>

      <ThemeProvider theme={themeFooter}>
        <Button startIcon={<Telegram />} className={styles.button} variant='text'>
          <p>Написать в поддержку</p>
        </Button>
      </ThemeProvider>
    </footer>
  )
}
