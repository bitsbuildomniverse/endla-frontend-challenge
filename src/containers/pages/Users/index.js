import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { ListGroup, Modal, Button, Form } from 'react-bootstrap';
import ChangePasswordField from '../../../components/ChangePasswordField';

// FRONTEND ONLY CODING CHALLENGE FILE

class Users extends Component {
  state = {
    current: false,
    password: false,
    password2: false,
    passwordUpdateSuccess: this.props.passwordUpdateSuccess,
    users: [
      {
        fields: {
          id: '001',
          first_name: 'Olive',
          last_name: 'Yew',
          email: 'yew@endla.com',
        },
      },
      {
        fields: {
          id: '002',
          first_name: 'Aida',
          last_name: 'Bugg',
          email: 'bugg@endla.com',
        },
      },
    ],
    formFirstName: '',
    formLastName: '',
    formEmail: '',
    addUserModalShow: false,
  };

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target); // would connect to backend
  };

  newUser = () => {
    this.setState({
      addUserModalShow: false,
    });

    // Set redux store 'registerUserSuccess' to be false //
  };

  fieldStateChanged = (field) => (state) =>
    this.setState({ [field]: state.errors.length === 0 });

  // state change watch functions for each field

  currentChanged = this.fieldStateChanged('current');
  passwordChanged = this.fieldStateChanged('password');

  // currentChanged = (e) => {
  //   if (e.target.value && e.target.value.length > 0) {
  //     this.setState({
  //       current: true,
  //     });
  //   } else {
  //     this.setState({
  //       current: false,
  //     });
  //   }
  // };

  // passwordChanged = this.fieldStateChanged('password');
  password2Changed = this.fieldStateChanged('password2');

  static propTypes = {
    auth: PropTypes.object.isRequired,
    changePassword: PropTypes.func.isRequired,
    passwordUpdateSuccess: PropTypes.bool.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.changePassword(
      e.target.current.value,
      e.target.password.value,
      e.target.password2.value,
    );
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name == 'token') {
      this.setState({ otp: e.target.value });
    }
  };

  render() {
    const user = {
      first_name: 'Sam',
      last_name: 'Smith',
      username: 'sam@endla.com',
      permission_list: {
        'permission 1': 'enabled',
        'permission 2': 'disabled',
      },
      id: 1,
    };
    const { current, password, password2 } = this.state;
    const formValidated = current && password && password2;

    const handleAddUserModal = (show) => {
      this.setState({ addUserModalShow: show });
      if (!show) {
        this.props.removeRegisterUserSuccess();
      }
    };
    const removeUser = (e) => {
      alert('Remove User');
      console.log(e);
    };
    const addUser = () => {
      handleAddUserModal(true);
    };

    return (
      <>
        <div className="container p-3">
          <h1 className="display-4">Account Settings</h1>
          <p className="lead">
            We always appreciate feedback - if you have chance leave us some, it
            helps us continue to improve.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-4 font-weight-bold">Name</div>
            <div>
              {user.first_name} {user.last_name}
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-4 font-weight-bold">Email</div>
            <div>{user.email}</div>
          </div>
          <div className="row">
            <div className="col-md-2 col-4 font-weight-bold">Username</div>
            <div>{user.username}</div>
          </div>

          <div>
            <hr></hr>
            <h5>Features</h5>
            {Object.keys(user.permission_list).map((permission) => (
              <>
                <div className="row">
                  <div className="col-md-2 col-4 font-weight-bold">
                    {permission}
                  </div>
                  <div>
                    {user.permission_list[permission] ? 'enabled' : 'disabled'}
                  </div>
                </div>
              </>
            ))}
          </div>

          <div>
            <hr></hr>
            <h5>Change password</h5>

            <form
              onSubmit={this.onSubmit}
              className="px-3 pb-2"
            >
              <div className="form-group">
                <label className="control-label">Current</label>
                <input
                  name="current"
                  type="password"
                  id="current"
                  className="form-control"
                  placeholder="Enter current password"
                  onChange={this.currentChanged}
                  required
                  autoFocus
                />
              </div>
              <ChangePasswordField
                onPasswordChanged={this.passwordChanged}
                onPassword2Changed={this.password2Changed}
              />

              <div className="form-group row">
                <div className="col-md-auto">
                  <button
                    className="btn btn-sm btn-primary btn-block"
                    type="submit"
                    disabled={!formValidated}
                  >
                    Save Changes
                  </button>
                </div>
                {this.props.passwordUpdateSuccess &&
                  'Password successfully updated.'}
              </div>
            </form>
          </div>

          <hr></hr>

          <div className="col-sm-4">
            <h5>Edit Users</h5>
            <button
              className="btn btn-primary"
              onClick={() => addUser()}
            >
              Add User
            </button>
            <br />
            <br />
            {this.state.users.length != 0 ? (
              <ListGroup horizontal="sm">
                <ListGroup.Item
                  className="col-sm-5 list-user-header"
                  style={{ borderRadius: '5px 0px 0px 0px' }}
                >
                  First Name
                </ListGroup.Item>
                <ListGroup.Item className="col-sm-8 list-user-header">
                  Last Name
                </ListGroup.Item>
                <ListGroup.Item className="col-sm-12 list-user-header">
                  Email
                </ListGroup.Item>
                <ListGroup.Item
                  className="col-sm-4 list-user-header"
                  style={{ borderRadius: '0px 5px 0px 0px' }}
                >
                  Remove
                </ListGroup.Item>
              </ListGroup>
            ) : (
              <p>You have no users. Add a user to get started!</p>
            )}
            {this.state.users.map((user) => (
              <ListGroup
                key={user.id}
                horizontal="sm"
                className="list-user"
              >
                <ListGroup.Item className="col-sm-5 list-user-info">
                  {user.fields.first_name}
                </ListGroup.Item>
                <ListGroup.Item className="col-sm-8 list-user-info">
                  {user.fields.last_name}
                </ListGroup.Item>
                <ListGroup.Item className="col-sm-12 list-user-info">
                  {user.fields.email}
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  disabled // temporarily disable until functionality is added
                  onClick={() => removeUser(user.id)}
                  className="col-sm-4 list-user-info remove-user"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </div>
          <Modal
            show={this.state.addUserModalShow}
            onHide={() => handleAddUserModal(false)}
            animation={true}
            size="lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="formUsername"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="firstname"
                    name="first_name"
                    placeholder="Please enter a first name"
                    onChange={this.handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formUsername"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="lastname"
                    name="last_name"
                    placeholder="Please enter a last name"
                    onChange={this.handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Please select a email"
                    onChange={this.handleFormChange}
                    required
                  />
                </Form.Group>
                {/* {!this.props.registerUserSuccess &&
                  this.props.registerUserError && (
                    <p style={{ color: "red" }}>
                      {this.props.registerUserError.message}
                    </p>
                  )} */}
                <Button
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <br />
        </div>
      </>
    );
  }
}

export default Users;
