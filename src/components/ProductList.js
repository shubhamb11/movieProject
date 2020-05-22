import React, { Component } from "react";
import { addToCart } from "./actions/actions";
import { connect } from "react-redux";
import { Card, Button, Col, Row, Toast } from "react-bootstrap";
import ProductView from "./ProductView";

class ProductList extends Component {
    state = {};

    setAlert(bool) {
        this.setState({
            showAlert: bool,
        });
    }

    handleAdd(id) {
        this.props.addToCart(id);
        this.setAlert(true);
    }

    showProductModal(id, bool) {
        this.setState({
            id: id,
            showModal: bool,
        });
    }

    showProduct(id) {
        this.showProductModal(id, true);
    }

    render() {
        let cardList = this.props.items.map((item) => {
            return (
                <Col
                    md={4}
                    xs={12}
                    sm={6}
                    lg={3}
                    key={item.imdbID}
                    id={item.imdbID}
                >
                    <Card style={{ margin: 10 }}>
                        <Card.Img
                            style={{ height: 250 }}
                            variant="top"
                            src={item.Poster}
                        />
                        <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <Card.Text style={{ textTransform: "capitalize" }}>
                                {item.Type}
                                <br></br>
                                {item.Year}
                            </Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => this.handleAdd(item.imdbID)}
                            >
                                Add To Cart
                            </Button>
                            <Button
                                style={{ marginLeft: 10 }}
                                variant="info"
                                onClick={() => this.showProduct(item.imdbID)}
                            >
                                View
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });

        return (
            <React.Fragment>
                <Toast
                    style={{
                        position: "absolute",
                        top: 70,
                        right: 20,
                        background: "lightgreen",
                    }}
                    variant="info"
                    onClose={() => this.setAlert(false)}
                    show={this.state.showAlert === true}
                    delay={2000}
                    autohide
                >
                    <Toast.Header>Added to Cart!</Toast.Header>
                </Toast>
                <Row>{cardList}</Row>
                {this.state.showModal ? (
                    <ProductView
                        show={this.state.showModal}
                        id={this.state.id}
                        handleAdd={(id) => this.handleAdd(id)}
                        hide={() => this.showProductModal("", false)}
                    />
                ) : (
                    ""
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.categorySelected === "all") {
        return {
            items: state.items,
        };
    } else {
        return {
            items: state.items.filter(
                (item) => item.Type === state.categorySelected
            ),
        };
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
