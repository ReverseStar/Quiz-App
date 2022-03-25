import React from "react";
import { Button, Form } from "react-bootstrap";
import CreateQuizModal from "../components/CreateQuizModal";

function CreateQuiz() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div
            className="container d-flex flex-column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
        >
            <h1>Create Quiz</h1>

            <Button variant="primary ms-auto">Publish</Button>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quiz Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
            <div className="add-question">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add Question
                </Button>

                <CreateQuizModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    );
}

export default CreateQuiz;
