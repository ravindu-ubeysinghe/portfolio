import React from 'react';
import { skillList } from '../../constants/skills';
import SkillGroup from './SkillGroup/SkillGroup';

import styles from './Skills.module.css';

export default function Skills() {
    return (
        <div className={styles.skillGroup}>
            {skillList.map(({ title ='', skills = []}) => 
                <SkillGroup title={title} skills={skills} />
            )}
        </div>
    )
}