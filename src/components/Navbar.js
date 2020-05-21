import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { filterCats } from './actions/actions';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const handleCategory = (itemType) => {
        props.filterCats(itemType);

    }

    let categories = [];
    let temp = new Map();
    props.items.map(item => {
        // console.log(temp.has(item.Type));

        if (!temp.has(item.Type)) {
            temp.set(item.Type);
            categories.push(
                <NavDropdown.Item key={item.Type} style={{ textTransform: "capitalize" }} onClick={() => handleCategory(item.Type)}>{item.Type}</NavDropdown.Item>
            );
        }
    });


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Movies</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={() => handleCategory('all')}>All</NavDropdown.Item>
                        {categories}
                    </NavDropdown>
                    <Link to="/cart">
                        {props.cartLength} in Cart
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        cartLength: state.addedItems.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterCats: (type) => { dispatch(filterCats(type)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);