import React from 'react';
import Projects from './Projects/Projects';
import styles from './Work.module.css';

export default function Work() {
    return (
        <>
            <div className={styles.employmentBlock}>
                <div className={styles.employer}>
                    <div className={styles.title}>
                        BetEasy Pty Ltd.
                        <span className={styles.duration}>
                            Mar 19 - Present
                        </span>
                        <p className={styles.location}>Melbourne Victoria Australia</p>
                    </div>
                    <div className={styles.roles}>
                        <div>
                            - Software Engineer
                        </div>
                    </div>   
                </div>
                <div className={styles.employer}>
                    <div className={styles.title}>
                        Weboptimizers Pty Ltd.
                        <span className={styles.duration}>
                            Jan 17 - Mar 19
                        </span>
                        <p className={styles.location}>Collingwood Victoria Australia</p>
                    </div>
                    <div className={styles.roles}>
                        <div>
                            - Senior Web Developer
                        </div>
                        <div>
                            - Web Developer
                        </div>
                    </div>                
                </div>
            </div>
            <Projects />
        </>
    );
}