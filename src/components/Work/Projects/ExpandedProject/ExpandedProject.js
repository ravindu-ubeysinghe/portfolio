import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactModal from "react-modal";

import styles from './ExpandedProject.module.css';

export default function ExpandedProject({ project, show, handleClose }) {
    const getSkills = (skills) => (
        <ul>
            {(skills||[]).map((skill) => {
                return <li key={skill}>{skill}</li>
            })}
        </ul>
    );

    return(
        <ReactModal
            className={cx(['modal-dialog', 'modal-content', styles.modal])}
            bodyOpenClassName="modal-open"
            overlayClassName={styles.modalOverlay}
            onRequestClose={handleClose}
            ariaHideApp={false}
            isOpen={show}
        >
            <Modal.Header className={styles.modalHeader} closeButton>
                <Modal.Title className={styles.modalTitle}>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
                <p>{project.description}</p>
                    {getSkills(project.skills)}
                <sub>{project.via}</sub>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </ReactModal>
    );
}

ExpandedProject.propTypes = {
    project: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}