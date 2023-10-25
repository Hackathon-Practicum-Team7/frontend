import {createTheme} from "@mui/material";
import * as yup from 'yup';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    customContained: true;
    customOutlined: true;
    customFilterActive: true;
    customFilter: true;
  }
}

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {variant: 'customContained'},
          style: {
            backgroundColor: '#5A9BFF',
            border: '1px solid transparent',
            color: 'white',
          },
        },
        {
          props: {variant: 'customOutlined'},
          style: {
            border: '1px solid #1D6BF3',
            color: '#1D6BF3',
          },
        },
        {
          props: {variant: 'customFilterActive'},
          style: {
            fontWeight: '500',
            backgroundColor: '#F1F6FF',
            color: '#1D6BF3',
            border: '1px solid transparent',
          },
        },
        {
          props: {variant: 'customFilter'},
          style: {
            color: '#797981',
            border: '1px solid #ACCCFF',
          },
        },
      ],
    },
  },
});


export const customLoginStyles = {
  text: {
    fontFamily: `'YS-Text', ` + `'Arial', ` + 'sans-serif',
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
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
    color: '#1a1b22',
  },
  'text_subtitle': {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#797981',
  },
  'text_form-link': {
    marginBottom: '24px',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
  },
  'text_secondary': {
    marginTop: '20px',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#b5b5b7',
  },
  'text_link': {
    marginLeft: '5px',
    color: '#fff',
  },
  'text_errored': {
    fontSize: '11px',
    lineHeight: '12px',
    color: '#ff0200',
  },
  input: {
    border: 'none',
    fontFamily: `'YS-Text', ` + `'Arial', ` + 'sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    '&.MuiInput-input': {
      padding: '12px 15px',
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
  'input-outline': {
    border: '1px solid #797981',
    borderRadius: '4px',
    ':has(> .Mui-focused)': {
      border: '2px solid #5a9bff',
    }
  },
  'input-outline_errored': {
    border: '2px solid #ff0200',
    borderRadius: '4px',
  },
}

export const authValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введите корректный адрес электронной почты вида example@mail.ru')
    .required('Это поле обязательно'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .required('Это поле обязательно')
});
