import React from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Stats from "./Pages/Stats"
import Info from "./Pages/Info"
import Charts from "./Pages/Charts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GradeConverter from "./Pages/GradeConverter";

const App = () => {
    return (
        <Router>
            <div className="h-screen ">
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
                    <Route path="/charts">
                        <Charts/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;