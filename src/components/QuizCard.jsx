import React from "react";
import "./QuizCard.css";

function QuizCard(props) {

    const calculateTotalPoints = () => {
        console.log((props.quiz.questions).reduce((freq, question) => {
            if (!freq[question.points]) freq[question.points] = 0;
            freq[question.points] += 1
            return freq
        }, {}))
        return (props.quiz.questions).reduce((total, question) => {
                return (total + question.points)
        }, 0)
    }

    return (
        <>
            <div className="quiz-container">
                <h1 className="heading">{props.quiz.title}</h1>
                <p className="description">
                    Description : {props.quiz.description}
                </p>
                <p className="points">Total Points : {calculateTotalPoints()}</p>
                <button type="submit" className="enter-btn">
                    Enter
                </button>
            </div>
        </>
    );
}

export default QuizCard;
