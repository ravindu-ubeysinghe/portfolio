import React from 'react';
import styles from './ImageSidebar.module.css';
import ProfilePic from './assets/profilePic.png';
import LinkedInLogo from './assets/linkedIn.png';
import GitHubLogo from './assets/gitHub.png';

export default function ImageSidebar() {
    return (
        <div className={styles.imageSidebar}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={ProfilePic} alt="Ravindu Ubeysinghe" />
                <h2 className={styles.titleBlock}>Hello there!
                    <p>I'm Ravindu, a Web Developer based in Melbourne, Australia</p>
                </h2>
                <div className={styles.socialBlock}>
                    <a href={'https://www.linkedin.com/in/ravinduubeysinghe/'} rel="noopener noreferrer" target="_blank">
                        <img className={styles.socialLogo} src={LinkedInLogo} alt="Linked In Profile" />
                    </a>
                    <a href={'https://github.com/ravindu-ubeysinghe'} rel="noopener noreferrer" target="_blank">
                        <img className={styles.socialLogo} src={GitHubLogo} alt="Github Profile" />
                    </a>
                </div>
            </div>
        </div>
    )
}