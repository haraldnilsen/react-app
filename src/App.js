import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";

import {
  Climbs,
  Home,
  Stats,
  Charts,
  Gear,
  Login,
  Signup,
  News,
  Spots,
  Profile,
  GradeConverter,
} from "./pages";

// import Climbs from "./pages/Climbs";
// import Home from "./pages/Home";
// import Stats from "./pages/Stats";
// import Charts from "./pages/Charts/Charts";
// import Gear from "./pages/Gear";
// import Login from "./pages/Login";
// import News from "./pages/News";
// import Spots from "./pages/Spots";
// import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Stats />
          </Route>
          <Route path="/converter">
            <GradeConverter />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/gear">
            <Gear />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/spots">
            <Spots />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
