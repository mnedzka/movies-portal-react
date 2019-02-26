import React from 'react';
import Like from './common/Like';

const MoviesTable = ({ movies, onDelete, onLike }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Genre</th>
          <th scope='col'>Stock</th>
          <th scope='col'>Rate</th>
          <th scope='col' />
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
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button className='btn btn-danger btn-small' onClick={() => onDelete(movie)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;
