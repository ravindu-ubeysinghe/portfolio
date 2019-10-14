import React from 'react';
import styles from './Work.module.css';

export default function Work() {
    return (
        <>
            <div className={styles.employer}>
                <div className={styles.title}>
                    BetEasy Pty Ltd.
                    <span className={styles.duration}>
                        Mar 19 - Present
                    </span>
                    <p className={styles.location}>Melbourne Victoria Australia</p>
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
                    <div className={styles.roles}>
                        Senior Web Developer
                    </div>
                    <div className={styles.roles}>
                        Web Developer
                    </div>
                </div>                
            </div>
        </>
    );
}