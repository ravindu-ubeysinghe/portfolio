import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styles from './RightSidebar.module.css';

export default function RightSidebar({ className }) {
    
    return (
        <div className={styles.rightSidebar}>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle className={styles.proToggle} as={Button} variant="link" eventKey="1">
                        Previous Projects
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Sample Projects as a list and labels</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle className={styles.qualToggle} as={Button} variant="link" eventKey="0">
                        Qualifications
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Qualifications as a list</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}