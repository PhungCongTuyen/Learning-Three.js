import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import "./assets/styles.scss";
import ROUTES from "./routes/routes";
import Interview from "./view/interview/Interview";
import FirstThing from "./view/first-thing/FirstThing";

const App = () => {
    return (
        <Router>
            <Route path={ROUTES.INTERVIEW.path} component={Interview} exact/>
            <Route path={ROUTES.FIRST_THING.path} component={FirstThing} exact/>
        </Router>
    );
};

export default App;
