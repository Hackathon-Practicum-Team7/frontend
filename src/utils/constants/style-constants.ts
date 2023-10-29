import {createTheme} from '@mui/material';

export const themeHeader = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#5A9BFF',
          color: '#FFF',
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: '500'
        },
      },
    },
  },
});

export const themeFooter = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFF',
          textTransform: 'none',
          fontSize: '12px',
          fontWeight: '500'
        },
      },
    },
  },
});

export const themeInput = createTheme({
  typography: {
    fontFamily: [
      'YS-Text',
      'Arial',
      'sans-serif',
    ].join(', '),
  },
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
          backgroundColor: 'white',
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
          },
          '&.Mui-disabled': {
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
      },
      variants: [
        {
          props: { variant: 'gray' },
          style: {
            backgroundColor: 'rgba(85, 85, 90, 0.6)',
            fontWeight: '400',
            color: 'white',
            height: '32px',
            '& .MuiChip-deleteIcon': {
              color: 'white',
              fontSize: '18px',
              fontWeight: '500',
            }
          },
        }
        ]
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
          backgroundColor: 'white',
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

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'YS-Text',
          fontSize: 14,
          color: '#1A1B22',
          fontWeight: '400',
          borderBottom: '1px solid rgba(221, 224, 228, 1)',
        },
        head: {
          fontWeight: '500',
          borderBottom: '1px solid #B5B5B7',
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 0,
          boxShadow: 'none',
        }
      }
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiButton-root': {
            fontSize: '16px',
          }
        }
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          paddingTop: '126px',
        },
      }
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          margin: '0 2px',
          borderColor: '#B5B5B7',
          borderRadius: '2px',
          ':hover': {
            backgroundColor: '#1D6BF3',
            color: 'white',
            borderColor: 'transparent',
          },
          "&.Mui-selected": {
            borderColor: 'transparent',
            backgroundColor: '#5A9BFF',
            color: 'white',
            ':hover': {
              backgroundColor: '#1D6BF3',
            }
          }
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
            fontSize: '16px',
            fontWeight: '500',
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
            fontSize: '16px',
            fontWeight: '500',
            backgroundColor: 'transparent',
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
        {
          props: { variant: 'customOutlinedFilter'},
          style: {
            border: '1px solid #fff',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '500',
            backgroundColor: 'transparent',
            "&.Mui-disabled": {
              borderColor: '#B5B5B7',
              color: '#B5B5B7',
            }
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
    marginBottom: '4px',
    fontFamily: `'YS-Display', ` + `'Arial', ` + 'sans-serif',
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

