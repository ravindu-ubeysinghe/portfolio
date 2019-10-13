import React from 'react';
import styles from './ImageSidebar.module.css';
import ProfilePic from './assets/profile-pic.png';

export default function ImageSidebar() {
    return (
        <div className={styles.imageSidebar}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={ProfilePic} alt="Ravindu Ubeysinghe" />
                <h2 className={styles.titleBlock}>Hello there!
                    <p>I'm Ravindu, a Web Developer based in Melbourne, Australia</p>
                </h2>
            </div>
        </div>
    )
}