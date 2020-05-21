import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <ProductList />
                </Container>
            </React.Fragment>
        );
    }
}


export default Home;
