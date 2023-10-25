import { createTheme } from "@mui/material";

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
          props: { variant: 'customContained' },
          style: {
            backgroundColor: '#5A9BFF',
            border: '1px solid transparent',
            color: 'white',
          },
        },
        {
          props: { variant: 'customOutlined'},
          style: {
            border: '1px solid #1D6BF3',
            color: '#1D6BF3',
          },
        },
        {
          props: { variant: 'customFilterActive' },
          style: {
            fontWeight: '500',
            backgroundColor: '#F1F6FF',
            color: '#1D6BF3',
            border: '1px solid transparent',
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
