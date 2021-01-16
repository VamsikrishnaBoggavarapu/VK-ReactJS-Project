import React from "react";
import { Provider } from 'react-redux';
import store from './shared/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

function App() {

    return (
        <Provider store={store}>
            <Router>
                {Routes}
            </Router>
        </Provider>
    )
}

export default App;