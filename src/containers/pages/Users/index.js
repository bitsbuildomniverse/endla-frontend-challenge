import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

import AddUserModal from './AddUserModal';

function createUser(id, firstName, lastName, emailAddress) {
  return { id, firstName, lastName, emailAddress };
}

const Users = () => {
  const [users, setUsers] = React.useState([
    createUser('001', 'Olive', 'Yew', 'yew@endla.com'),
    createUser('002', 'Aida', 'Bugg', 'bugg@endla.com'),
  ]);
  const [addUserModalOpen, setAddUserModalOpen] = React.useState(false);

  const handleOpenAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  const handleCloseAddUserModal = () => {
    setAddUserModalOpen(false);
  };

  const hanldeRemoveUser = (id) => () => {
    setUsers(users.filter((user) => user.id !== id));
    alert('Removed Successfully. (**This will be replaced with Snackbar of MUI**)');
  };

  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
      >
        Users
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpenAddUserModal}
        gutterBottom
      >
        Add New
      </Button>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.emailAddress}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={hanldeRemoveUser(user.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddUserModal
        open={addUserModalOpen}
        handleClose={handleCloseAddUserModal}
      />
    </>
  );
};

export default Users;
