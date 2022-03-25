import { Modal, Button, Form, Stack } from "react-bootstrap";
import { useState } from "react";

function CreateQuizModal(props) {
    const [formValues, setFormValues] = useState({
        question: "",
        imageURL: "",
        questionType: "Multiple",
        points: 1,
        options: [
            {
                text: "",
                isCorrect: false,
            },
            {
                text: "",
                isCorrect: false,
            },
        ],
    });

    const handleAdd = () => {
        setFormValues((prev) => {
            return {
                ...prev,
                options: [
                    ...prev.options,
                    {
                        text: "",
                        isCorrect: false,
                    },
                ],
            };
        });
    };

    const handleChange = (e) => {
        setFormValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
        // (prev) => (true)
        // (prev) => {
        //     return true
        // }
    };

    const handleOptionChange = (e, index) => {
        setFormValues((prev) => {
            let newOptions = formValues.options;
            newOptions[index].text = e.target.value;
            console.log(e.target.value);
            return {
                ...prev,
                options: newOptions,
            };
        });
    };

    const handleCheckboxChange = (e, index) => {
        if (e.target.checked && formValues.questionType === "Single") {
            uncheckAll();
        }
        setFormValues((prev) => {
            let newOptions = formValues.options;
            newOptions[index].isCorrect = e.target.checked;
            console.log(e.target.checked);
            return {
                ...prev,
                options: newOptions,
            };
        });
    };

    const uncheckAll = () => {
        formValues.options.forEach((option) => {
            option.isCorrect = false;
        });
    };

    const handleSave = () => {
        props.onHide();
        formValues.points = parseInt(formValues.points);
        props.onSave(formValues);
        setFormValues({
            question: "",
            imageURL: "",
            questionType: "Multiple",
            points: 1,
            options: [
                {
                    text: "",
                    isCorrect: false,
                },
                {
                    text: "",
                    isCorrect: false,
                },
            ],
        });
    };

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Question
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Question"
                            name="question"
                            value={formValues.question}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Image URL"
                            name="imageURL"
                            value={formValues.imageURL}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Label>Select Question Type</Form.Label>
                    <Form.Select
                        name="questionType"
                        value={formValues.questionType}
                        onChange={(e) => {
                            handleChange(e);
                            uncheckAll();
                        }}
                    >
                        <option>Single</option>
                        <option>Multiple</option>
                    </Form.Select>

                    <Form.Label>Add Quiz Points</Form.Label>
                    <Form.Select
                        name="points"
                        value={formValues.points}
                        onChange={handleChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Form.Select>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Add File</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>

                    <div className="options-container mb-2">
                        {formValues.options.map((option, index) => {
                            return (
                                <>
                                    <div className="option d-flex mb-2">
                                        <Form.Check
                                            checked={option.isCorrect}
                                            inline
                                            name="isCorrect"
                                            onChange={(e) =>
                                                handleCheckboxChange(e, index)
                                            }
                                        />
                                        <Form.Control
                                            placeholder={`Option ${index + 1}`}
                                            value={option.text}
                                            name="text"
                                            required
                                            onChange={(e) =>
                                                handleOptionChange(e, index)
                                            }
                                        />
                                    </div>
                                </>
                            );
                        })}
                        {/* <div className="option d-flex">
                            <Form.Check inline name="group1" />
                            <Form.Control placeholder="Option 2" required />
                        </div> */}
                    </div>
                    <Stack direction="horizontal" gap="2" className="mt-4">
                        <Button variant="primary" onClick={handleAdd}>
                            Add more option
                        </Button>
                    </Stack>
                </Form>
                {/*  */}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    type="submit"
                    variant="success"
                    className="me-auto "
                    onClick={handleSave}
                >
                    Save Question
                </Button>
                <Button variant="danger" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default CreateQuizModal;
