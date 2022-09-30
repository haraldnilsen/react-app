import React from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Graph from "./Components/Graph"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/graph">
                        <Graph/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;