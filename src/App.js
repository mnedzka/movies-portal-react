import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Counters from './components/Counters';
import Movies from './components/Movies';
import NavBarRouter from './components/common/NavbarRouter';
import NotFound from './components/common/NotFound';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import MovieForm from './components/MovieForm';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import './index.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }],
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <main className='container'>
        <NavBarRouter />
        <Switch>
          <Route
            path='/counters/:name?'
            render={props => (
              <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <Counters
                  {...props}
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                />
              </React.Fragment>
            )}
          />
          <Route path='/login' component={LoginForm} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/movies/:id' component={MovieForm} exact />
          <Route path='/movies/' component={Movies} exact />
          <Route path='/rentals' component={Rentals} />
          <Route path='/customers' component={Customers} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' to='/movies' exact />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    );
  }
}

export default App;
