import * as React from 'react';
import { Box, Button } from '@mui/material';
import PasswordField from '../../../components/PasswordField';

const initialValue = {
  value: '',
  visibility: false,
  errorMessage: '',
  rules: [],
};

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = React.useState({ ...initialValue, rules: ['required'] });
  const [newPassword, setNewPassword] = React.useState({ ...initialValue, rules: ['required', 'min:8'] });
  const [confirmationPassword, setConfirmationPassword] = React.useState({
    ...initialValue,
    rules: ['required', 'match'],
  });

  const handleChangeValue = (value, setValue) => (event) => {
    checkValidity({ ...value, value: event.target.value }, setValue);
  };

  const handleToggleVisibility = (value, setValue) => (event) => {
    event.preventDefault();
    setValue({
      ...value,
      visibility: !value.visibility,
    });
  };

  const checkValidity = (value, setValue) => {
    let message = '';
    for (const rule of value.rules) {
      if (rule === 'required') {
        if (value.value.length === 0) {
          message = 'This field should not be empty.';
        }
      } else if (rule === 'min:8') {
        if (value.value.length < 8) {
          message = 'This field should greater than 8.';
        }
      } else if (rule === 'match') {
        if (value.value !== newPassword.value) {
          message = 'Passwords do not match.';
        }
      }
    }
    setValue({
      ...value,
      errorMessage: message,
    });
  };

  const resetForm = () => {
    setCurrentPassword({ ...currentPassword, value: '' });
    setNewPassword({ ...newPassword, value: '' });
    setConfirmationPassword({ ...confirmationPassword, value: '' });
  };

  const isFormValid = () => {
    return (
      !!currentPassword.value.length &&
      !currentPassword.errorMessage.length &&
      !!newPassword.value.length &&
      !newPassword.errorMessage.length &&
      !!confirmationPassword.value.length &&
      !confirmationPassword.errorMessage.length
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert('You password has been changed! (**This will be replaced with MUI snackbar**)');
    resetForm();
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexWrap: 'wrap', width: '320px' }}
      onSubmit={handleSubmit}
    >
      <PasswordField
        label="Current Password"
        input={currentPassword}
        handleChangeValue={handleChangeValue(currentPassword, setCurrentPassword)}
        handleClickVisibility={handleToggleVisibility(currentPassword, setCurrentPassword)}
      />
      <PasswordField
        label="New Password"
        input={newPassword}
        handleChangeValue={handleChangeValue(newPassword, setNewPassword)}
        handleClickVisibility={handleToggleVisibility(newPassword, setNewPassword)}
      />
      <PasswordField
        label="Password Confirmation"
        input={confirmationPassword}
        handleChangeValue={handleChangeValue(confirmationPassword, setConfirmationPassword)}
        handleClickVisibility={handleToggleVisibility(confirmationPassword, setConfirmationPassword)}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={!isFormValid()}
        sx={{ m: 1, width: '248px', height: '54px' }}
      >
        Change Password
      </Button>
    </Box>
  );
};

export default ChangePassword;
