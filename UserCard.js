import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserCard = ({ onAddUsersDetails }) => {

    return (
        <Card>
            <Card.Header>
                <div className="d-flex justify-content-between align-items-center m-1">
                    <label>Users List</label>
                    <Button variant="primary" onClick={onAddUsersDetails}>
                        Add User Details
                    </Button>
                </div>
            </Card.Header>
            <Card.Body></Card.Body>
        </Card>
    );
};

export default UserCard;