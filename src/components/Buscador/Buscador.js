import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    document.getElementById('title').value = ''
  }

  render() {
    const { title } = this.state;
    return (
      <div className='buscadorContainer'>
        {/* <h2>Buscador</h2> */}
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              // value={title}
              placeholder='Movie...'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.props.movies.length ?
            this.props.movies.map((movie) =>
              <div key={movie.imdbID} className='pelicula'>
                <img  src={movie.Poster} />
                <NavLink to={`/movie/${movie.imdbID}`} className='buscadorMovieLInk' >{movie.Title}</NavLink>
                <button className='fav' onClick={() =>
                  this.props.addMovieFavorite(movie)}>
                  Add to Favorites
                </button>
              </div>
            ) : null}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

