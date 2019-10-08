import React from 'react';
import styles from './ImageSidebar.module.css';
import ProfilePic from './assets/profile-pic.png';

export default function ImageSidebar({ className }) {
    return (
        <div className={className}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={ProfilePic} alt="Ravindu Ubeysinghe" />
            </div>
        </div>
    )
}