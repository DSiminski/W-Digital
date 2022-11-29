import { TextField } from '@mui/material';

import styled from 'styled-components';

export const StyledTextField = styled(TextField)({
 
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6a7dfe',
    },
    
  },
});

export const Title = styled.div`
color: red;
font-size: 15px;
`;
