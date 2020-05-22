import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart, removeProduct, decreaseQuantity } from './actions/actions';
import { Col, Row } from 'react-bootstrap';
import CartCard from './CartCard';
import '../styles/order-summary.scss';

class Cart extends Component {


    state = {}
    handleAddToCart(id) {
        console.log("handling", id);

        this.props.addToCart(id);
    }


    render() {
        console.log(this.props.items);
        return (
            <Container>
                <Row>
                    <Col lg={6}>
                        {
                            this.props.items.map(item => (
                                <CartCard key={item.imdbID} item={item} addToCart={(id) => this.handleAddToCart(id)} decreaseQuantity={(id) => this.props.decreaseQuantity(id)} removeProduct={(id) => this.props.removeProduct(id)} />
                            ))
                        }
                    </Col>
                    <Col lg={6} className="order-summary">
                        <div className="title">
                            <div>Order</div>
                            <div>Summary</div>
                        </div>
                        <div className="total">
                            Total: &nbsp;{this.props.total} INR
                        </div>
                    </Col>
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