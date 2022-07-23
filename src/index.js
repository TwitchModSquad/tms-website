import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './master.css';

import Panel from './routes/panel';

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <a>Home</a> 
            </nav>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>Home!</div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/panel" element={<Panel />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);