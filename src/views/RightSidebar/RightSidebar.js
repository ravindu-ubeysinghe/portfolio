import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Skills from '../../components/Skills/Skills';
import Work from '../../components/Work/Work';
import ContactForm from '../../components/ContactForm/ContactForm';
import arrow from './assets/arrow.svg';
import styles from './RightSidebar.module.css';

export default function RightSidebar() {
    const [expanded, setExpanded] = useState({
        proToggle: true,
        qualToggle: false
    });

    function AccordionToggle({ children, eventKey, type }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () => {
            const toggle = (state) =>
                type === 'pro'
                    ? { proToggle: !state.proToggle, qualToggle: false }
                    : { qualToggle: !state.qualToggle, proToggle: false };
            setExpanded((state) => ({
                ...state,
                ...toggle(state)
            }));
        });

        return (
            <button
                type="button"
                className={cx([styles.proToggle, 'btn', 'btn-link'])}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }

    AccordionToggle.propTypes = {
        children: PropTypes.node.isRequired,
        eventKey: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    };

    return (
        <div className={styles.rightSidebar}>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <div
                            className={styles.proToggle}
                            as={Button}
                            variant="link"
                            eventKey="0"
                            type="pro"
                        >
                            Work History + Previous Projects
                            <img
                                src={arrow}
                                alt="arrow"
                                className={cx(styles.toggleIcon, styles.open)}
                            ></img>
                        </div>
                    </Card.Header>
                    <Card.Body
                        className={cx([
                            styles.workBlock,
                            styles.accordionContent
                        ])}
                    >
                        <Work />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <div
                            className={styles.qualToggle}
                            as={Button}
                            variant="link"
                            eventKey="1"
                            type="qual"
                        >
                            Technologies + Tools
                            <img
                                src={arrow}
                                alt="arrow"
                                className={cx(styles.toggleIcon, styles.open)}
                            ></img>
                        </div>
                    </Card.Header>
                    <Card.Body className={styles.accordionContent}>
                        <Skills />
                    </Card.Body>
                </Card>
            </Accordion>
        </div>
    );
}
