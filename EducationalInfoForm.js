import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs';

const EducationalInfoForm = () => {
    const [selectedEducation, setSelectedEducation] = useState('');
    const [educationFields, setEducationFields] = useState([]);
    const [frozenFields, setFrozenFields] = useState([]);

    const handleEducationSelect = (event) => {
        setSelectedEducation(event.target.value);
    };

    const handleAddEducation = () => {
        if (selectedEducation && !educationFields.includes(selectedEducation)) {
            setEducationFields([...educationFields, selectedEducation]);
            setSelectedEducation('');
        }
    };

    const handleDeleteEducation = (education) => {
        const updatedFields = [...educationFields].filter((field) => field !== education);
        setEducationFields(updatedFields);
        setFrozenFields([...frozenFields].filter((field) => field !== education));
    };

    const handleFreezeEducation = (education) => {
        if (!frozenFields.includes(education)) {
            setFrozenFields([...frozenFields, education]);
        }
    };

    const isFieldEmpty = (education) => {
        return frozenFields.includes(education);
    };

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Select Education Level</Form.Label>
                <Form.Control as="select" value={selectedEducation} onChange={handleEducationSelect}>
                    <option value="">Select...</option>
                    <option value="sslc">SSLC</option>
                    <option value="hsc">HSC</option>
                    <option value="ug">UG</option>
                    <option value="pg">PG</option>
                </Form.Control>
            </Form.Group>

            <Button
                variant="primary"
                onClick={handleAddEducation}
                disabled={!selectedEducation || educationFields.includes(selectedEducation)}
            >
                Add Education
            </Button>

            {educationFields.map((education) => (
                <React.Fragment key={education}>
                    <Row className="mt-3">
                        <Col>
                            <h5>{education}</h5>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Group>
                                <Form.Label>School Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter school name"
                                    disabled={isFieldEmpty(education)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Year</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter year"
                                    disabled={isFieldEmpty(education)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Percentage</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter percentage"
                                    disabled={isFieldEmpty(education)}
                                />
                            </Form.Group>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                            {isFieldEmpty(education) ? (
                                <>
                                    <BsFillXCircleFill
                                        className="text-danger m-2"
                                        size={24}
                                        onClick={() => handleDeleteEducation(education)}
                                    />
                                    <BsCheckCircleFill className="text-success" size={24} />
                                </>
                            ) : (
                                <>
                                    <BsFillXCircleFill
                                        className="text-danger m-2"
                                        size={24}
                                        onClick={() => handleDeleteEducation(education)}
                                    />
                                    <BsCheckCircleFill
                                        className="text-primary"
                                        size={24}
                                        onClick={() => handleFreezeEducation(education)}
                                    />
                                </>
                            )}
                        </Col>
                    </Row>
                </React.Fragment>
            ))}

            {educationFields.length > 0 && (
                <Row className="justify-content-center mt-3">
                    <Col xs="auto">
                        <Button type="submit" variant="primary" className="me-2">
                            Submit
                        </Button>
                        <Button variant="secondary" className="me-2">
                            Reset
                        </Button>
                    </Col>
                </Row>
            )}
        </Form>
    );
};

export default EducationalInfoForm;