import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './SkillGroup.module.css';

export default function SkillGroup({ title = '', skills = []}) {
    const className = cx(['col-sm-3', styles.skillContainer]);
    return (
        <div className={className}>
            <strong>{title}</strong>
            <ul>
                {skills.map((skill) => {
                    return <li>{skill}</li>
                })}
            </ul>
        </div >
    )
}

SkillGroup.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
}
