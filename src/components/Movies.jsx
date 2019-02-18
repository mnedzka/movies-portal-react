import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter(m => movie._id !== m._id);

    this.setState({
      movies,
    });
  };

  render() {
    const { movies } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database</p>;
    return (
      <>
        <p>Showing {count} movies in the database</p>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Genre</th>
              <th scope='col'>Stock</th>
              <th scope='col'>Rate</th>
              <th scope='col' />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button className='btn btn-danger btn-small' onClick={() => this.handleDelete(movie)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
