import React, {FunctionComponent} from 'react';
import {
  FormControl,
  Input,
  Link,
  TextField,
  Typography
} from '@mui/material';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import loginStyles from './login.module.css';

import {authValidationSchema, customLoginStyles} from '../../utils/constants';

import {CustomButton} from '../../components/custom-button/custom-button';

import {TAuthForm} from '../../utils/types';

export const Login: FunctionComponent = () => {
  const form = useForm<TAuthForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(authValidationSchema),
  });
  const {register, handleSubmit, formState: {errors}} = form;

  const submitAuthForm = (data: TAuthForm | undefined) => {
    console.log(errors);
    console.log({data});
  };

  return (
    <section className={loginStyles['login-page']}>
      <div className={loginStyles['login-page__form-wrap']}>
        <Typography variant="h1" align="center" sx={[customLoginStyles.text, customLoginStyles['text_heading']]}>
          Карьерный трек
        </Typography>
        <Typography variant="h2" align="center" sx={[customLoginStyles.text, customLoginStyles['text_subheading']]}>
          для работодателей
        </Typography>
        <form onSubmit={handleSubmit(submitAuthForm)} noValidate>
          <div className={loginStyles['login-page__inputs-wrap']}>
            <Typography variant="subtitle1" align="center"
                        sx={[customLoginStyles.text, customLoginStyles['text_subtitle']]}>
              Войти в аккаунт
            </Typography>
            <TextField variant="standard"
                       name="email"
                       type="email"
                       {...register("email")}
                       placeholder="Почта"
                       fullWidth
                       error={!!errors.email}
                       sx={customLoginStyles.outline}
                       InputProps={{disableUnderline: true}}
                       inputProps={{sx: customLoginStyles.input}}
            />
            {
              errors.email &&
              <p>{errors.email?.message}</p>
            }
            <TextField variant="standard"
                       name="password"
                       type="password"
                       {...register("password")}
                       placeholder="Пароль"
                       fullWidth
                       error={!!errors.password}
                       sx={customLoginStyles.outline}
                       InputProps={{disableUnderline: true}}
                       inputProps={{sx: customLoginStyles.input}}
            />
          </div>
          <Typography paragraph sx={[customLoginStyles.text, customLoginStyles['text_subtitle']]}>
            <Link href="#" color="#1d6bf3" underline="hover" sx={[customLoginStyles.text, customLoginStyles['text_form-link']]}>
              Не помню пароль
            </Link>
          </Typography>
          <CustomButton customType="customContained" width="100%"
                        onClick={handleSubmit(submitAuthForm)}>Войти</CustomButton>
        </form>
      </div>
      <Typography paragraph sx={[customLoginStyles.text, customLoginStyles['text_secondary']]}>
        Новый пользователь?
        <Link href="#"
              underline="hover"
              sx={[customLoginStyles.text, customLoginStyles['text_secondary'], customLoginStyles['text_link']]}>
          Зарегистрироваться
        </Link>
      </Typography>
    </section>
  )
}
