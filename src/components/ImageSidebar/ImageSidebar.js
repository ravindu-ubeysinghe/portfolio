import React from 'react';
import styles from './ImageSidebar.module.css';
import ProfilePic from './assets/profile-pic.png';

export default function ImageSidebar() {
    return (
        <div className={styles.imageSidebar}>
            <div className={styles.imageContainer}>
                <h2 className={styles.titleBlock}>Hello there, I'm Ravindu
                    <p>I'm a Web Developer based in Melbourne, Australia</p>
                </h2>
                <img className={styles.image} src={ProfilePic} alt="Ravindu Ubeysinghe" />
            </div>
        </div>
    )
}