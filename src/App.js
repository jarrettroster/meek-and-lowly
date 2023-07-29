import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'; // Import the App.css file for styling
import Header from './component/Header';
import HomePage from './pages/HomePage';
import Footer from '../src/component/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <HomePage /> 
            </div>
            <div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;