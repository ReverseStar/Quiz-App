import Register from "./components/Register";
import Home from "./pages/Home";
import Login from "./components/Login";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import QuizCard from "./components/QuizCard";
import { ForgotPassword } from "./pages/ForgotPassword";
import CreateQuiz from "./pages/CreateQuiz";

function App() {

    return (

        <Router>
            <Routes>
                
                <Route path="/" element={ <Home />} />

                <Route path="/register" element={<Register/>} />

                <Route path="/login" element={<Login />} />

                <Route path="/forgot" element={<ForgotPassword />} />

                <Route path="/create" element={<CreateQuiz />} />
            </Routes>
        </Router>
    );
}

export default App;
