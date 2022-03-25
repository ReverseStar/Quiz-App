import React from "react";
import "./QuizCard.css";

function QuizCard() {
    return (
        <>
            <div className="quiz-container">
                <h1 className="heading">Algorithm</h1>
                <p className="description">
                    Description : All questions are about the algorithm related
                </p>
                <p className="points">Total Points : 50</p>
                <button type="submit" className="enter-btn">
                    Enter
                </button>
            </div>
        </>
    );
}

export default QuizCard;
