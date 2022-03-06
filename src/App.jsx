import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import pages
import Home from "./pages/Home"

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default (App)
