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

export const filterOptions = {
  workingConditions: [
    'Не имеет значения',
    'Офис',
    'Гибрид',
    'Удаленка',
  ],
  employmentTypes: [
    'Не имеет значения',
    'Полная занятость',
    'Частичная занятость',
    'Проектная работа',
    'Стажировка',
  ],
  hasPortfolio: [
    'Не имеет значения',
    'Указано',
  ],
  grade: [
    'Не имеет значения',
    'Junior',
    'Middle',
    'Senior',
    'Lead',
  ],
}

export const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "8px 0 8px 12px !important",
          position: 'relative',
          fontFamily: 'YS-Text',
          fontSize: '14px',
          fontWeight: '400',
          border: '1px solid #797981',
          borderRadius: '4px',
          ':after': {
            border: '0',
            transition: 'none',
          },
          ':before': {
            border: '0',
            transition: 'none',
          },
          "&.Mui-focused": {
            borderColor: '#DDE0E4',
          }
        },
      }
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: '#F1F6FF',
          fontFamily: 'YS-Text',
          fontSize: '14px',
          fontWeight: '500',
          color: 'rgba(29, 107, 243, 1)',
        },
        deleteIcon: {
          color: 'rgba(29, 107, 243, 1)',
          fontSize: '20px',
          ':hover': {
            color: 'rgba(121, 121, 129, 1)',
          }
        }
      }
    },

    MuiMenu: {
      styleOverrides: {
        list: {
          padding: '0',
          boxSizing: 'border-box',
        },
        paper: {
          borderRadius: '0 0 4px 4px',
          boxShadow: '0 4px 6px rgba(176, 190, 197, 0.3)'
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
        input: {
          cursor: 'pointer',
        },
        notchedOutline: {
          outline: 0,
          border: 0,
          },
        }
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        inputRoot: {
          height: '40px',
          position: 'relative',
          fontFamily: 'YS-Text',
          fontSize: '14px',
          fontWeight: '400',
          border: '1px solid #797981',
          borderRadius: '4px',
          outline: 0,
          "&.Mui-focused": {
            outline: 0,
            borderColor: '#DDE0E4',
          }
        },
        input: {
          padding: '0 !important',
        },
        inputFocused: {
          outline: 0,
          borderColor: '#DDE0E4',
        },
        popupIndicator: {
          position: 'absolute',
        },
        popupIndicatorOpen: {
          transform: 'none',
        },
        listbox: {
          padding: 0,
        },
        paper: {
          borderRadius: '0 0 4px 4px !important'
        },
      }
    },

    MuiButton: {
      variants: [
        {
          props: { variant: 'customContained' },
          style: {
            backgroundColor: '#5A9BFF',
            border: '1px solid transparent',
            color: 'white',
            "&.Mui-disabled": {
              backgroundColor: '#B5B5B7',
              color: 'white',
            }
          },
        },
        {
          props: { variant: 'customOutlined'},
          style: {
            border: '1px solid #1D6BF3',
            color: '#1D6BF3',
            "&.Mui-disabled": {
              borderColor: '#B5B5B7',
              color: '#B5B5B7',
            }
          },
        },
        {
          props: { variant: 'customFilterActive' },
          style: {
            fontWeight: '500',
            backgroundColor: '#F1F6FF',
            color: '#1D6BF3',
            border: '1px solid transparent',
            '&:focus': {
              backgroundColor: '#F1F6FF !important',
              color: '#1D6BF3 !important',
            }
          },
        },
        {
          props: { variant: 'customFilter' },
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

export const student = {
    "name": "Ирина",
    "surname": "Иванова",
    "profession": "Web-разработчик",
    "grade": "middle",
    "city": "Санкт-Петербург",
    "started_working": "2023-02-02",
    "about": "Я дизайнер",
    "avatar": "student_35ce3300-9c12-40b6-93ce-c03b7548200d/avatars/maxresdefault.jpg",
    "resume": "student_35ce3300-9c12-40b6-93ce-c03b7548200d/resumes/hakaton.pdf",
    "is_looking_for_job": true,
    "has_portfolio": true,
    "employment_types": [
      "Полная занятось",
      "Частичная занятость",
      "Проектная работа",
      "Стажировка"
    ],
    "working_condition": [
      "Офис",
      "Гибрид",
      "Удаленка"
    ],
    "contact": {
    "id": 2,
      "email": "student2@example.com",
      "phone": "+79998887744",
      "telegram": "https://t.me/alena",
      "portfolio": "https://github.com/alena",
      "whatsapp": "+79998887744"
    },
}
