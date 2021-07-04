import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */
            this.props.moviesFavourites.map((movie) => 
                <div key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}> {movie.Title} </Link>
                  <button onClick={() => this.props.removeMovieFavorite({id: movie.imdbID})}>X</button>
                </div>
            )
          }
        </ul>
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
