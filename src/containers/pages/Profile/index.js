import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';

const userInfo = {
  fullName: 'Sam Smith',
  emailAddress: 'sam@endla.com',
  username: 'samsmith',
};

const categories = {
  fullName: 'Full Name',
  emailAddress: 'Email Address',
  username: 'Username',
};

const Profile = () => {
  return (
    <TableContainer>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
      >
        Your Profile
      </Typography>
      <Table>
        <TableBody>
          {Object.keys(userInfo).map((key) => (
            <TableRow key={key}>
              <TableCell
                align="right"
                sx={{ fontSize: '1em', fontWeight: 'bold', width: '50%' }}
              >
                {categories[key] ?? '?'}:
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: '1em' }}
              >
                {userInfo[key] ?? '?'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Profile;
