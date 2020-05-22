import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import '../styles/card-cart.scss';

const CartCard = (props) => {
    const item = props.item;
    return (
        <Row className="card-cart">
            <Button className="remove-btn" onClick={() => props.removeProduct(item.imdbID)}>x</Button>
            <Col lg={4} className="card-image">
                <img src={item.Poster} alt={item.Poster}></img>
            </Col>
            <Col lg={8} className="card-info">
                <div className="card-title">
                    {item.Title}
                </div>
                <ul className="card-meta">
                    <li>Type : {item.Type}</li> <li>QTY : {item.quantity}</li>
                </ul>
                <Row className="qi-wrapper">
                    <Col lg={7}>
                        <div className="quantity">
                            Quantity
                            <Button onClick={() => props.decreaseQuantity(item.imdbID)}>-</Button>
                            {item.quantity}
                            <Button onClick={() => props.addToCart(item.imdbID)}>+</Button>
                        </div>
                    </Col>
                    <Col lg={5} className="price">
                        INR: <span>{item.price * item.quantity}</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}


export default CartCard;