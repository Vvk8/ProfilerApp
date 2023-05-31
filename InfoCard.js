import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import PersonalInfoForm from './PersonalInfoForm';
import EducationalInfoForm from './EducationalInfoForm';
import ExperienceInfoForm from './ExperienceInfoForm';

const InfoCard = ({ onSessionEnd }) => {
    const [activeTab, setActiveTab] = useState('personal');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleNextTab = () => {
        const tabs = ['personal', 'educational', 'experience'];
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
    };

    const handlePreviousTab = () => {
        const tabs = ['personal', 'educational', 'experience'];
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1]);
        }
    };

    const handleSessionEnd = () => {
        onSessionEnd();
    };

    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey={activeTab} onSelect={handleTabChange}>
                    <Nav.Item>
                        <Nav.Link eventKey="personal">Personal Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="educational">Educational Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="experience">Previous Experience</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {activeTab === 'personal' && <PersonalInfoForm onNext={handleNextTab} />}
                {activeTab === 'educational' && (
                    <EducationalInfoForm onNext={handleNextTab} onPrevious={handlePreviousTab} />
                )}
                {activeTab === 'experience' && (
                    <ExperienceInfoForm onNext={handleNextTab} onPrevious={handlePreviousTab} onSubmit={handleSessionEnd} />
                )}
            </Card.Body>
        </Card>
    );
};

export default InfoCard;