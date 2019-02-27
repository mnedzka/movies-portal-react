import React, { Component } from 'react';
import Like from './common/Like';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
    },
    {
      key: 'delete',
      content: movie => (
        <button className='btn btn-danger btn-small' onClick={() => this.props.onDelete(movie)}>
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <table className='table'>
        <TableHeader column={this.columns} sortColumn={sortColumn} onSort={onSort} />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
