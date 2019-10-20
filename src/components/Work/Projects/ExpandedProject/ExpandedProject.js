import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ReactModal from "react-modal";
import { camelCase, isEmpty } from 'lodash';
import { skillList } from '../../../../constants/skills';
import close from './close.svg';

import styles from './ExpandedProject.module.css';

export default function ExpandedProject({ project, show, handleClose }) {
    const getSkillClass = (skill) => {
        // eslint-disable-next-line
        const skillCats = skillList.find((skillGroup) => {
            if (skillGroup.skills.includes(skill)) {
                return camelCase(skillGroup.title);
            }
        });

        if(!isEmpty(skillCats)) {
            return camelCase(skillCats.title);
        }
        return 'other';
    }
    const getSkills = (skills) => (
        <ul>
            {(skills||[]).map((skill) => {
                return <li key={skill} className={styles[getSkillClass(skill)]}>{skill}</li>
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
            <Modal.Header className={styles.modalHeader}>
                <img src={close} alt='Close Button' onClick={handleClose} className={styles.closeButton}/>
                <Modal.Title className={styles.modalTitle}>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
                <p>{project.description}</p>
                <p><strong>Skills Utilised</strong></p>
                    {getSkills(project.skills)}
                <sub>{project.via}</sub>
            </Modal.Body>
            {/* <Modal.Footer className={styles.modalFooter}>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer> */}
        </ReactModal>
    );
}

ExpandedProject.propTypes = {
    project: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}