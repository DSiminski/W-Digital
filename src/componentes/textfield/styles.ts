import { TextField } from '@mui/material';

import styled from 'styled-components';

export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#9B4A46',
    
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '##6a7dfe',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6a7dfe',
    },
    '&:hover fieldset': {
      borderColor: '#6a7dfe',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6a7dfe',
    },
  },
});