import React from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar/Navbar";
import Climbs from "./Pages/Climbs";
import Home from "./Pages/Home"
import Stats from "./Pages/Stats";
import Charts from "./Pages/Charts";
import Gear from "./Pages/Gear";
import Login from "./Pages/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GradeConverter from "./Pages/GradeConverter";
import News from "./Pages/News";
import Spots from "./Pages/Spots";

const App = () => {
    return (
        <Router>
            <div className="h-screen ">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/climbs">
                        <Climbs />
                    </Route>
                    <Route path="/stats">
                        <Stats/>
                    </Route>
                    <Route path="/converter">
                        <GradeConverter/>
                    </Route>
                    <Route path="/charts">
                        <Charts/>
                    </Route>
                    <Route path="/gear">
                        <Gear/>
                    </Route>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/spots">
                        <Spots/>
                    </Route>
                    <Route path="/charts">
                        <Charts/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;