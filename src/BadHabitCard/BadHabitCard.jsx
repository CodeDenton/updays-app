import styles from './BadHabitCard.module.css'
import React, { useState, useEffect } from 'react'

function getDaysSince(dateString) {
    const lastDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - lastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
}

function BadHabitCard(props) {

    const [streak, setStreak] = useState(0)
    const [lastResetDate, setLastResetDate] = useState(null);

    useEffect(() => {
        const storedDate = localStorage.getItem(props.storageKey);

        if (storedDate) {
            const days = getDaysSince(storedDate);
            setStreak(days);
            setLastResetDate(storedDate);
        } else {
            const today = new Date().toISOString();
            localStorage.setItem(props.storageKey, today);
            setLastResetDate(today);
            setStreak(0);
        }
    }, []);

    function handleReset() {
        const today = new Date().toISOString();
        localStorage.setItem(props.storageKey, today)
        setLastResetDate(today);
        setStreak(0)
    }

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <img className={`${styles.cardImage} ${styles[props.imgClass]}`}
                            src={props.img}
                            alt="card picture"
                            width="200px" /></div>
                    <h2 className={styles.cardHeading}>{props.name}</h2>
                    <p className={styles.cardText}>{`Clean for ${streak} days`}</p>
                    <button className={styles.resetButton} onClick={handleReset}>I did this today</button>
                </div>
            </div>

        </>
    );
}

export default BadHabitCard