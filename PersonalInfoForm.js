import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const PersonalInfoForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        };

        fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    // Data successfully created
                    console.log('Data created successfully');
                } else {
                    // Error creating data
                    console.error('Failed to create data');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Form className="m-2" onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-left mt-3">
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

export default PersonalInfoForm;