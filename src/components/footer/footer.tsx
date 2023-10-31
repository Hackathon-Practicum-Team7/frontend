import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Telegram} from '@mui/icons-material';
import styles from './footer.module.css';
import {Button, ThemeProvider} from '@mui/material';
import {themeFooter} from '../../utils/constants/style-constants';

export const Footer: React.FC<{ isTransparent: boolean, isNotFoundPage: boolean }> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {
        props.isNotFoundPage
          ? <footer className={
            props.isTransparent ? `${styles.footer} ${styles['footer_transparent']}` : `${styles.footer}`}>
            <div className={styles.content}>
              <p className={styles.logo}>© Карьерный Трекер</p>

              <p className={styles.text}>для работодателей, 2023</p>
            </div>

            <ThemeProvider theme={themeFooter}>
              <Button startIcon={<Telegram/>} className={styles.button} variant='text'
                      onClick={() => navigate('/in-progress')}>
                <p>Написать в поддержку</p>
              </Button>
            </ThemeProvider>
          </footer>
          : <footer className={`${styles.footer} ${styles['footer_transparent']} ${styles['footer_not-found-page']}`}>
            <div className={styles.content}>
              <p className={styles.logo}>© Карьерный Трекер</p>

              <p className={`${styles.text} ${styles['text_black']}`}>для работодателей, 2023</p>
            </div>

            <ThemeProvider theme={themeFooter}>
              <Button startIcon={<Telegram/>} className={styles.button} sx={{color: '#1A1B22'}} variant='text'
                      onClick={() => navigate('/in-progress')}>
                <p>Написать в поддержку</p>
              </Button>
            </ThemeProvider>
          </footer>
      }
    </>
  )
}
