import React, { Component } from 'react';
import Input from './common/Input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = e => {
    e.preventDefault();
    // const username = this.username.current.value;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>LoginForm</h1>
        <form onSubmit={this.handleSubmits}>
          <Input
            name='username'
            value={account.value}
            label='Username'
            onChange={this.handleChange}
          />
          <Input
            name='password'
            value={account.password}
            label='Password'
            onChange={this.handleChange}
          />
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
