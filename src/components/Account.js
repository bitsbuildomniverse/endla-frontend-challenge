import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Account extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    const shading = `user-profile ${this.state.showMenu && 'focus'}`;

    return (
      <div
        ref={this.node}
        className="user-fixed-position"
      >
        <a
          id="user-account"
          className={shading}
          onClick={this.showMenu}
        >
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-person-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
        </a>
        {this.state.showMenu && (
          <div
            className="account-card shadow-lg p-3 mb-5 bg-white rounded user-profile"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <h5>Sam</h5>

            <ul className="list-group list-group-flush">
              <Link to="/account-settings">Account settings</Link>
              <a
                href="/"
                onClick={() => alert('signed out')}
              >
                Sign out
              </a>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Account;
