import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const Permissions = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Make profile private and hide activity"
      >
        Description
      </FormControlLabel>
      <FormControlLabel
        control={<Checkbox />}
        label="Receive newsletter emails"
      />
    </FormGroup>
  );
};

export default Permissions;
