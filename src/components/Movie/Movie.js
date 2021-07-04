import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }


    render() {
        return (
            <div className="movieDetailContainer">
                <div className='movieDetailCard'>
                    <div className='movieDetailMain'>
                        <img src={this.props.movies.Poster} />
                        <h3 className='movieDetailTitle'>{this.props.movies.Title}</h3>

                    </div>
                    <div className='movieDetailDetails'>
                        <p> Released: {this.props.movies.Released}</p>
                        <p> Duration: {this.props.movies.Runtime}</p>
                        <p> Director: {this.props.movies.Director}</p>

                    </div>

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (movie) => dispatch(getMovieDetail(movie))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);