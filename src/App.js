import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/Navbar";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </HashRouter>
            </React.Fragment>
        );
    }
}

export default App;
