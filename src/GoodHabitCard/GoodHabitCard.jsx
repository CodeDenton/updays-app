import styles from './GoodHabitCard.module.css'
import React, { useState, useEffect } from 'react'


function GoodHabitCard(props) {

    const [streak, setStreak] = useState(0)
    const [hasLoaded, setHasLoaded] = useState(false)
    const [lastClickDate, setLastClickDate] = useState(null)

    function handleClick() {
        const today = new Date().toISOString().split('T')[0]
        if(lastClickDate !== today) {
            setStreak(streak + 1)
            setLastClickDate(today)
            localStorage.setItem(`${props.storageKey}_lastClickDate`, today)
        } else {
            alert("You can only complete this once per day!")
        }
    }

    useEffect( () => {
        const storedStreak = localStorage.getItem(props.storageKey)
        const storedLastClickDate = localStorage.getItem(`${props.storageKey}_lastClickDate`);

        if(storedStreak) {
            setStreak(parseInt(storedStreak))
        } 

        if(storedLastClickDate) {
            setLastClickDate(storedLastClickDate)
        }
        setHasLoaded(true)
    }, [props.storageKey]);

    useEffect( () => {
        if(hasLoaded) localStorage.setItem(props.storageKey, streak)
    }, [streak])

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
                    <p className={styles.cardText}>{`${streak} days logged`}</p>
                    <button className={styles.clickButton} onClick={handleClick}>I did this today</button>
                </div>
            </div>

        </>
    );
}

export default GoodHabitCard