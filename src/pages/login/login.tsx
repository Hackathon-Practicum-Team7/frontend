import React, {FunctionComponent} from 'react';

import {FormControl, FormControlState, Input, InputProps, makeStyles, TextField} from '@mui/material';

import loginStyles from './login.module.css';

export const Login: FunctionComponent = () => {
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     // Ваши пользовательские стили здесь
  //     borderColor: 'red',
  //     borderRadius: '8px',
  //   },
  // }));
  //
  // const classes = useStyles()

  const customStyles = {
    input: {
      boxSizing: 'border-box',
      width: '100%',
      border: '1px solid #797981',
      borderRadius: '4px',
      '&.Mui-focused': {
        border: '2px solid #5a9Bff',
      },
      '&.MuiInputBase-root:hover:before': {
        borderBottom: 'none',
      },
      '::before': {
        border: 'none',
      },
      '::after': {
        border: 'none',
      },
    }
  }

  return (
    <section className={loginStyles['login-page']}>
      <div className={loginStyles['login-page__form-wrap']}>
        <FormControl defaultValue="" required className={loginStyles.form}>
          <Input placeholder="Почта" sx={customStyles.input}/>
        </FormControl>
        <FormControl defaultValue="" required className={loginStyles.form}>
          <Input type="password" placeholder="Пароль" sx={customStyles.input}/>
        </FormControl>
      </div>
    </section>
  )
}
