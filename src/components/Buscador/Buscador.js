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
  favFunction(movie, id){
    if(document.getElementById(id).value === 'Add To Favorites'){

      this.props.addMovieFavorite(movie);
      document.getElementById(id).value = 'Added to Favorites';
      return
    }
    else return alert('Movie is already on favorites list!');
  }




  render() {
    const { title } = this.state;
    return (
      <div className='buscadorContainer'>
        {/* <h2>Buscador</h2> */}
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            
            <input
              type="search"
              id="title"
              className='buscadorInputSearch'
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
                <input className='favButton' id={movie.imdbID} onClick={() =>
                   this.favFunction(movie, movie.imdbID)} type='button' value='Add To Favorites'/> 
                   {/* this.props.addMovieFavorite(movie) */}
                  
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

