import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BsFillXCircleFill, BsCheckCircleFill, BsPlusCircleFill } from 'react-icons/bs';

const ExperienceInfoForm = () => {
    const [experiences, setExperiences] = useState([
        { companyName: '', fromDate: '', toDate: '', isFrozen: false },
    ]);

    const addExperience = () => {
        setExperiences([...experiences, { companyName: '', fromDate: '', toDate: '', isFrozen: false }]);
    };

    const deleteExperience = (index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences.splice(index, 1);
        setExperiences(updatedExperiences);
    };

    const handleInputChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][field] = value;
        setExperiences(updatedExperiences);
    };

    const handleFreezeData = (index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].isFrozen = true;
        setExperiences(updatedExperiences);
        console.log('Data frozen:', updatedExperiences[index]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
    };

    return (
        <Form onSubmit={handleSubmit}>
            <BsPlusCircleFill className="m-2 justify-content-left" onClick={addExperience} />
            {experiences.map((experience, index) => (
                <Row className="m-2" key={index}>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <Form.Group controlId={`formCompanyName-${index}`}>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter company name"
                                value={experience.companyName}
                                onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
                                disabled={experience.isFrozen}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={9} sm={9} md={4} lg={4}>
                        <Form.Group controlId={`formFromDate-${index}`}>
                            <Form.Label>From</Form.Label>
                            <Form.Control
                                type="date"
                                value={experience.fromDate}
                                onChange={(e) => handleInputChange(index, 'fromDate', e.target.value)}
                                disabled={experience.isFrozen}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={9} sm={9} md={4} lg={4}>
                        <Form.Group controlId={`formToDate-${index}`}>
                            <Form.Label>To</Form.Label>
                            <Form.Control
                                type="date"
                                value={experience.toDate}
                                onChange={(e) => handleInputChange(index, 'toDate', e.target.value)}
                                disabled={experience.isFrozen}
                            />
                        </Form.Group>
                    </Col>

                    <Col className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <BsFillXCircleFill
                                onClick={() => deleteExperience(index)}
                                className="text-danger m-2"
                                size={24}
                            />
                            {!experience.isFrozen ? (
                                <BsCheckCircleFill
                                    onClick={() => handleFreezeData(index)}
                                    className="text-primary"
                                    size={24}
                                />
                            ) : (
                                <BsCheckCircleFill className="text-success" size={24} />
                            )}
                        </div>
                    </Col>
                </Row>
            ))}

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
        </Form>
    );
};

export default ExperienceInfoForm;