import {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';

import {useForm, Controller} from 'react-hook-form';
import {useNavigate, useLocation} from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup';

import loginStyles from './login.module.css';
import {customLoginStyles} from '../../utils/constants/style-constants';

import {authValidationSchema} from '../../utils/constants/constants';
import {TAuthForm} from '../../utils/types';
import {useSelector} from '../../services/hooks/use-selector';
import {inputValuesActions} from '../../services/slices/login-input-values';

import {CustomButton} from '../../components/custom-button/custom-button';

import {login} from '../../services/async-thunk/auth';
import {useDispatch} from '../../services/hooks/use-dispatch';

export const Login: FunctionComponent = () => {
  const inputValuesState = useSelector((state) => state.inputValuesState);
  const userDataState = useSelector((state) => state.userDataState);

  const [emailInputValue, setEmailInputValue] = useState<string | undefined>(inputValuesState.email);
  const [passwordInputValue, setPasswordInputValue] = useState<string | undefined>(inputValuesState.email);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const {register, handleSubmit, formState: {errors}, control} = useForm<TAuthForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(authValidationSchema),
  });

  const handleSetInputValues = useCallback((emailValue: string, passwordValue: string) => {
    dispatch(inputValuesActions.setInputValues({
      email: emailValue,
      password: passwordValue
    }))
  }, [inputValuesState.email, inputValuesState.password])

  const submitAuthForm = () => {
    Promise.resolve(dispatch(login(inputValuesState.email, inputValuesState.password)))
      .then(() => {
        navigate('/', {replace: true});
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    const main = document.getElementsByTagName("main");
    if (pathname === '/login') {
      main[0].classList.add(loginStyles['main-login-page']);
    }
  }, [pathname])

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
            {
              userDataState.isError &&
              userDataState.error.errorCode === 401
                ? <FormHelperText
                  sx={[customLoginStyles.text, customLoginStyles['text_form-errored']]}>
                  Неверные почта или пароль
                </FormHelperText>
                :
                <Typography variant="subtitle1" align="center"
                            sx={[customLoginStyles.text, customLoginStyles['text_subtitle']]}>
                  Войти в аккаунт
                </Typography>
            }
            <div>
              <Controller
                control={control}
                name="email"
                render={({
                           field: {onChange},
                         }) => (
                  <TextField variant="standard"
                             type="email"
                             autoComplete="email"
                             placeholder="Почта"
                             fullWidth
                             {...register("email")}
                             error={!!errors.email}
                             sx={errors?.email ? customLoginStyles['input-outline_errored'] : customLoginStyles['input-outline']}
                             InputProps={{disableUnderline: true}}
                             inputProps={{sx: customLoginStyles.input}}
                             onChange={(event) => {
                               setEmailInputValue(event.target.value);
                               handleSetInputValues(event.target.value, passwordInputValue ? passwordInputValue : '');
                               onChange(event.target.value)
                             }}
                  />
                )}
              />
              {
                errors.email &&
                <FormHelperText
                  sx={[customLoginStyles.text, customLoginStyles['text_errored']]}>
                  {errors.email?.message}
                </FormHelperText>
              }
            </div>
            <div>
              <Controller
                control={control}
                name="password"
                render={({
                           field: {onChange},
                         }) => (
                  <TextField variant="standard"
                             type="password"
                             autoComplete="current-password"
                             {...register("password")}
                             placeholder="Пароль"
                             fullWidth
                             error={!!errors.password}
                             sx={errors?.password ? customLoginStyles['input-outline_errored'] : customLoginStyles['input-outline']}
                             InputProps={{disableUnderline: true}}
                             inputProps={{sx: customLoginStyles.input}}
                             onChange={(event) => {
                               setPasswordInputValue(event.target.value);
                               handleSetInputValues(emailInputValue ? emailInputValue : '', event.target.value);
                               onChange(event.target.value)
                             }}
                  />
                )}
              />
              {
                errors.password &&
                <FormHelperText
                  sx={[customLoginStyles.text, customLoginStyles['text_errored']]}>
                  {

                    errors.password?.message
                  }
                </FormHelperText>
              }
            </div>
          </div>
          <Typography paragraph sx={[customLoginStyles.text, customLoginStyles['text_subtitle']]}>
            <Link href="#" color="#1d6bf3" underline="hover"
                  sx={[customLoginStyles.text, customLoginStyles['text_form-link']]}>
              Не помню пароль
            </Link>
          </Typography>
          <CustomButton customType="customContained" width="100%" type="submit">Войти</CustomButton>
        </form>
      </div>
      <Typography paragraph sx={[customLoginStyles.text, customLoginStyles['text_secondary']]}>
        Новый пользователь?
        <Link href={'/in-progress'}
              underline="hover"
              sx={[customLoginStyles.text, customLoginStyles['text_secondary'], customLoginStyles['text_link']]}>
          Зарегистрироваться
        </Link>
      </Typography>
    </section>
  )
}
