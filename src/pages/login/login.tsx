import React, {FunctionComponent} from 'react';

import {
  FormControl,
  FormControlState,
  Input,
  InputProps, Link,
  makeStyles,
  TextField,
  Typography
} from '@mui/material';

import loginStyles from './login.module.css';

import {CustomButton} from '../../components/custom-button/custom-button';

export const Login: FunctionComponent = () => {
  const customLoginStyles = {
    text: {
      fontStyle: 'normal',
    },
    'text_heading': {
      fontFamily: `'YS-Display', ` + `'Arial', ` + 'sans-serif',
      marginBottom: '4px',
      fontWeight: '500',
      fontSize: '24px',
      lineHeight: '32px',
      color: '#1a1b22',
    },
    'text_subheading': {
      fontFamily: `'YS-Text', ` + `'Arial', ` + 'sans-serif',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24px',
      color: '#1a1b22',
    },
    'text_subtitle': {
      fontFamily: `'YS-Text', ` + `'Arial', ` + 'sans-serif',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#797981',
    },
    'text_link': {
      marginBottom: '24px',
      fontFamily: `'YS-Text', ` + `'Arial', ` + 'sans-serif',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
    },
    input: {
      boxSizing: 'border-box',
      padding: '12px 15px',
      border: '1px solid #797981',
      borderRadius: '4px',
      fontFamily: `'YS-Text', ` + `'Arial', ` + 'sans-serif',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#1a1b22',
      '.MuiInputBase-input.MuiInput-input': {
        padding: '0',
      },
      '&.Mui-focused': {
        border: '2px solid #5a9Bff',
      },
      '&.MuiInputBase-root:hover:before': {
        borderBottom: 'none',
      },

      ':placeholder': {
        color: '#797981',
      },
      '::before': {
        content: 'none',
        border: 'none',
      },
      '::after': {
        content: 'none',
        border: 'none',
      },
    },
  }

  return (
    <section className={loginStyles['login-page']}>
      <div className={loginStyles['login-page__form-wrap']}>
        <Typography variant="h1" align="center" sx={[customLoginStyles.text, customLoginStyles['text_heading']]}>
          Карьерный трек
        </Typography>
        <Typography variant="h2" align="center" sx={[customLoginStyles.text, customLoginStyles['text_subheading']]}>
          для работодателей
        </Typography>
        <form>
          <div className={loginStyles['login-page__inputs-wrap']}>
            <Typography variant="subtitle1" align="center"
                        sx={[customLoginStyles.text, customLoginStyles['text_subtitle']]}>
              Войти в аккаунт
            </Typography>
            <FormControl defaultValue="" required>
              <Input placeholder="Почта" fullWidth sx={customLoginStyles.input}/>
            </FormControl>
            <FormControl defaultValue="" required>
              <Input type="password" placeholder="Пароль" fullWidth sx={customLoginStyles.input}/>
            </FormControl>
          </div>
          <Typography paragraph>
            <Link href="#" color="#1d6bf3" underline="hover" sx={customLoginStyles['text_link']}>
              Не помню пароль
            </Link>
          </Typography>
          <CustomButton customType="customContained" width="100%">Войти</CustomButton>
        </form>
      </div>
    </section>
  )
}
