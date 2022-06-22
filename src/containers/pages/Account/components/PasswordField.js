import * as React from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = ({ label = 'Password', input = {}, handleChangeValue, handleClickVisibility }) => {
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ m: 1 }}
      variant="outlined"
      error={!!input.errorMessage.length}
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        type={input.visibility ? 'text' : 'password'}
        value={input.value || ''}
        onChange={handleChangeValue}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickVisibility}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {input.visibility ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      <FormHelperText id="outlined-weight-helper-text">{input.errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default PasswordField;
