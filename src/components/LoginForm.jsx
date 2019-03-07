import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/Input';
import Form from './common/Form.jsx';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password'),
  };

  doSubmit = () => {
    //Call the server
    console.log('Submitted');
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={data.value}
            label='Username'
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='password'
            value={data.password}
            label='Password'
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className='btn btn-primary'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
