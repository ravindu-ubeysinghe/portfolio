import React, { useState } from 'react';
import { projectList } from '../../../constants/projects';
import ExpandedProject from './ExpandedProject/ExpandedProject';

import styles from './Projects.module.css';

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);
    return (
        <div className={styles.projectsList}>
            <ul>
                {(projectList||[]).map((project) => {
                    return (
                        <li key={project.title} onClick={() => setExpandedProject(project)}>{project.title}</li>
                    )
                })}
            </ul>
            {expandedProject && (
                <ExpandedProject
                    project={expandedProject}
                    show={expandedProject !== null}
                    handleClose={() => setExpandedProject(null)}
                />
            )}
        </div>
    );
}