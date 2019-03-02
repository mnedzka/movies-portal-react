import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Counters from './components/Counters';
import Movies from './components/Movies';
import NavBarRouter from './components/common/NavbarRouter';
import './index.scss';
import { Route } from 'react-router-dom';

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
        <Route
          path='/counters'
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
        <Route path='/' component={Movies} exact />
      </main>
    );
  }
}

export default App;
