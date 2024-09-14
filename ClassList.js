// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClassList from './components/ClassList';
import SessionList from './components/SessionList';
import Lecture from './components/Lecture';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/classes" component={ClassList} />
                <Route path="/sessions/:classId" component={SessionList} />
                <Route path="/lecture/:sessionId" component={Lecture} />
                <Route path="/" exact>
                    <h1>Welcome to the Virtual Classroom</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;