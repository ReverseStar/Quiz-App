import React from "react";
import { Button, Form } from "react-bootstrap";
import CreateQuizModal from "../components/CreateQuizModal";
import useLocalStorage from '../hooks/useLocalStorage';
import {useNavigate} from 'react-router-dom';

function CreateQuiz(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const [title, setTitle] = React.useState("");

    const [description, setDescription] = React.useState("");

    const [questions, setQuestions] = React.useState([]);

    const [quizzes, setQuizzes] = useLocalStorage("quizzes", []);

    const navigate = useNavigate();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const onAddQuestion = (question) => {
        console.log(question)
        setQuestions((prev) => {
            return [...prev, question];
        });
    };

    const handlePublish = () => {
        const quiz = {
            title : title,
            description : description,
            questions : questions,
        }

        setQuizzes([
            ...quizzes,
            quiz
        ])
        navigate('/')
    }

    return (
        <div
            className="container d-flex flex-column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
        >
            <h1>Create Quiz</h1>
            <Button onClick={handlePublish} variant="primary ms-auto">Publish</Button>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quiz Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={handleTitle}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quiz Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    value={description}
                    onChange={handleDescription}
                />
            </Form.Group>

            {questions.map((question) => {
                return (
                    <>
                        <h1>{question.question}</h1>
                    </>
                );
            })}

            <div className="add-question">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add Question
                </Button>

                <CreateQuizModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onSave={onAddQuestion}
                />
            </div>
        </div>
    );
}

export default CreateQuiz;
