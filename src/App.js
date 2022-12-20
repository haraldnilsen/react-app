import React from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Stats from "./Pages/Stats"
import Info from "./Pages/Info"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GradeConverter from "./Pages/GradeConverter";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/stats">
                        <Stats/>
                    </Route>
                    <Route path="/converter">
                        <GradeConverter/>
                    </Route>
                    <Route path="/info">
                        <Info/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;