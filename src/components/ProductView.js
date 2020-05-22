import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "../styles/product-view.scss";

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getData();
    }

    handleClose() {
        this.props.hide();
    }

    async handleAxiosCall() {
        try {
            const res = await axios.get(
                "http://omdbapi.com/?apikey=f5efb081&i=" + this.props.id
            );
            return await res.data;
        } catch (error) {
            return {
                err: true,
            };
        }
    }

    getData() {
        if (this.props.id !== "" && this.props.id !== undefined) {
            (async () => {
                const movieInfo = await this.handleAxiosCall();
                if (!movieInfo.err) {
                    this.setState({
                        movieInfo,
                    });
                }
            })();
        }
    }

    render() {
        console.log(this.props);

        const movie = this.state.movieInfo;
        // console.log("movie-->", movie);

        if (movie === undefined) {
            return <div>Loading</div>;
        }

        return (
            <Modal
                show={this.props.show}
                onHide={() => this.handleClose()}
                size="lg"
                centered
            >
                <Button
                    className="remove-btn"
                    onClick={() => this.handleClose()}
                >
                    x
                </Button>
                <Modal.Body className="movie-card">
                    <div className="container">
                        <img src={movie.Poster} alt="cover" className="cover" />

                        <div className="hero">
                            <div className="details">
                                <div className="title1">
                                    {movie.Title} <span>{movie.Rated}</span>
                                </div>

                                <div className="title2">{movie.Actors}</div>
                            </div>
                        </div>

                        <div className="description">
                            <div className="column1">
                                <span className="tag">{movie.Year}</span>
                                <span className="tag">{movie.imdbRating}</span>
                                <span className="tag">{movie.Metascore}</span>
                                <span className="tag">{movie.Released}</span>
                                <span className="tag">{movie.Runtime}</span>
                                <span className="tag">{movie.Genre}</span>
                            </div>

                            <div className="column2">
                                <p>{movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => this.props.handleAdd(movie.imdbID)}
                    >
                        Add To Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ProductView;
