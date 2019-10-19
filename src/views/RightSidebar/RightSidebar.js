import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Skills from '../../components/Skills/Skills';
import Work from '../../components/Work/Work';

import styles from './RightSidebar.module.css';

export default function RightSidebar() {
    
    return (
        <div className={styles.rightSidebar}>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle className={styles.proToggle} as={Button} variant="link" eventKey="0">
                        Work History + Previous Projects
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body className={styles.accordionContent}>
                        <Work />
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle className={styles.qualToggle} as={Button} variant="link" eventKey="1">
                        Skills I Possess
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body className={styles.accordionContent}>
                        <Skills />
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}
