import { Modal, Button, Form, Stack } from "react-bootstrap";
import { useState } from "react";

function CreateQuizModal(props) {
    const [options, setOptions] = useState([
        {
            text: "",
            isCorrect: false,
        },
        {
            text: "",
            isCorrect: false,
        },
    ]);

    const [correctOptions, setCorrectOptions] = useState([]);

    const handleAdd = () => {
        setOptions((prev) => {
            return [
                ...prev,
                {
                    text: "",
                    isCorrect: false,
                },
            ];
        });
    };

    return (
        <Modal
            {...props}
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
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Image URL"
                        />
                    </Form.Group>

                    <Form.Label>Select Question Type</Form.Label>
                    <Form.Select>
                        <option>Default</option>
                        <option>Single</option>
                        <option>Multiple</option>
                        <option>Undefined</option>
                    </Form.Select>

                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Add File</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>

                    <div className="options-container mb-2">
                        {options.map((option, index) => {
                            return (
                                <>
                                    <div className="option d-flex mb-2">
                                        <Form.Check
                                            inline
                                            name={`{group ${index + 1}}`}
                                        />
                                        <Form.Control
                                            placeholder={`Option ${index + 1}`}
                                            required
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
            <Button variant="primary" className="me-auto ">
                    Save Question
                </Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
                
            </Modal.Footer>
        </Modal>
    );
}
export default CreateQuizModal;
