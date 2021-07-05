import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  render() {
    return (
      <div className='favContainer'>


        <h2 className='favTitle'>Favorite Movies</h2>
        <div className='favMoviesContainer'>
          <ul className='favMovie'>
            {/* Aqui deberias poner tu lista de peliculas! */
              this.props.moviesFavourites.length ? this.props.moviesFavourites.map((movie) =>
                <li key={movie.imdbID}>
                  <button onClick={() => this.props.removeMovieFavorite({ id: movie.imdbID })}>X</button>
                  <img src={movie.Poster} />
                  <Link to={`/movie/${movie.imdbID}`} className='favName'> {movie.Title} </Link>
                </li>
              )
                : <p className='favName'>No favorites movies yet...</p>}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
