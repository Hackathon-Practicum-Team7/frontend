import {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import loginStyles from './login.module.css';

import {authValidationSchema} from '../../utils/constants/constants';
import {customLoginStyles} from '../../utils/constants/style-constants';
import {TAuthForm} from '../../utils/types';
import {useSelector} from '../../services/hooks/use-selector';
import {inputValuesActions} from '../../services/async-thunk/login-input-values';

import {CustomButton} from '../../components/custom-button/custom-button';

import {login} from '../../services/async-thunk/auth';
import {useDispatch} from '../../services/hooks/use-dispatch';


export const Login: FunctionComponent = () => {
  const inputValuesState = useSelector((state) => state.inputValuesState);
  const userDataState = useSelector((state) => state.userDataState);

  const [emailInputValue, setEmailInputValue] = useState<string | undefined>(inputValuesState.inputValues);
  const [passwordInputValue, setPasswordInputValue] = useState<string | undefined>(inputValuesState.inputValues);

  const dispatch = useDispatch();

  const handleSetInputValues = useCallback((emailValue: string, passwordValue: string) => {
    dispatch(inputValuesActions.setInputValues({
      email: emailValue,
      password: passwordValue
    }))
  }, [inputValuesState.email, inputValuesState.password])

  const form = useForm<TAuthForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(authValidationSchema),
  });
  const {register, handleSubmit, formState: {errors}} = form;

  const submitAuthForm = () => {
    dispatch(login(inputValuesState.email, inputValuesState.password));
  };

  useEffect(() => {
    console.log('accessStore:', userDataState.accessToken)
    console.log('refreshStore:', userDataState.refreshToken)
  }, [userDataState])

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
            <div>
              <TextField variant="standard"
                         type="email"
                         {...register('email')}
                         placeholder="Почта"
                         fullWidth
                         error={!!errors.email}
                         sx={errors?.email ? customLoginStyles['input-outline_errored'] : customLoginStyles['input-outline']}
                         InputProps={{disableUnderline: true}}
                         inputProps={{sx: customLoginStyles.input}}
                         onChange={(event) => {
                           setEmailInputValue(event.target.value);
                           handleSetInputValues(event.target.value, passwordInputValue ? passwordInputValue : '');
                           // props.onChange(event.target.value)
                         }}
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
              <TextField variant="standard"
                         type="password"
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
                           // props.onChange(event.target.value)
                         }}
              />
              {
                errors.password &&
                <FormHelperText
                  sx={[customLoginStyles.text, customLoginStyles['text_errored']]}>
                  {errors.password?.message}
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
