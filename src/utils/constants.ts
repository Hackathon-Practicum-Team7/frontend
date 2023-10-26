import {createTheme} from "@mui/material";

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
            fontWeight: '500 !important',
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

