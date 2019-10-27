import React, { useState } from 'react';
import cx from 'classnames';

import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: '',
        ph: '',
    });

    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);

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
        }).then((response) => {
            return response.json();
        }).then(() => {
            // console.log(data);
            setSubmit(true);
        }).catch(() => {
            setError(true);
        });
    }

    if (error) {
        return <div className={cx([styles.success, styles.form])}>Something went wrong, please try again in a jiffy</div>
    }

    if (submit) {
        return <div className={cx([styles.success, styles.form])}>Your enquiry received. I{'\''}ll get back to you shortly</div>
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