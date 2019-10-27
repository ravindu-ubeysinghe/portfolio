import React, { useState } from 'react';

import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: '',
        ph: '',
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value  = e.target.value;
        setFormData((state) => ({
            ...state,
            [name]: value,
        }));
    }

    const sendEmail = () => {
        fetch('https://data.ravindu.com.au/email/send', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        });
    }
    return (
        <div className={styles.form}>
            <p className={styles.title}>Say Hello!</p>
            <input type="text" name="name" onChange={handleChange} value={formData.name} className={styles.name} placeholder="Name" />
            <input type="text" name="email" onChange={handleChange} value={formData.email} className={styles.email} placeholder="Email" />
            <input type="text" name="content" onChange={handleChange} value={formData.content} className={styles.content} placeholder="Message" />
            <input type="text" name="ph" onChange={handleChange} value={formData.ph} className={styles.ph} />
            <button onClick={sendEmail} className={styles.submitBtn}>Send</button>
        </div>
    )
}