import React from "react";
import { Link, useNavigate } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import "./Home.css";
import { Button, Modal } from "react-bootstrap";
import CreateQuizModal from "../components/CreateQuizModal";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="home-container">
                <div className="home-heading">
                    <h1 className="title">This is Home</h1>
                    <div className="create">
                        <Button
                            variant="primary"
                            onClick={() => navigate("/create")}
                        >
                            Create Quiz
                        </Button>
                    </div>
                </div>
                <div className="quizes">
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                </div>
            </div>
        </>
    );
};

export default Home;
