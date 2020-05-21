import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart, removeProduct, decreaseQuantity } from './actions/actions';
import { Card, Button, Col, Row } from 'react-bootstrap';

class Cart extends Component {
    state = {}
    render() {

        let addedItems = this.props.items.map(item => {
            return (
                <Col lg={12} key={item.imdbID} id={item.imdbID}>
                    <Card style={{ margin: 10 }}>
                        <Card.Img style={{ height: 250 }} variant="top" src={item.Poster} />
                        <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <Card.Text style={{ textTransform: 'capitalize' }}>
                                {item.Type}
                                <br></br>
                                {item.Year}
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.handleAdd(item.imdbID)}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            );
        })

        return (
            <Container>
                <Row>
                    {addedItems}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        cartLength: state.addedItems.length,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => { dispatch(removeProduct(id)) },
        decreaseQuantity: (id) => { dispatch(decreaseQuantity(id)) },
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);