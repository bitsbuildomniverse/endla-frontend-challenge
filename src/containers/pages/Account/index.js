import * as React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

import TabPanel from './TabPanel';
import Permissions from './Permissions';
import ChangePassword from './ChangePassword';

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const Account = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
      >
        Your Account
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical Tabs for Account Settings"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab
            label="Permissions"
            {...a11yProps(0)}
          />
          <Tab
            label="Change Password"
            {...a11yProps(1)}
          />
        </Tabs>
        <TabPanel
          value={value}
          index={0}
        >
          <Permissions />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          <ChangePassword />
        </TabPanel>
      </Box>
    </>
  );
};

export default Account;
