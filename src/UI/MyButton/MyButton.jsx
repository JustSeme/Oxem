import React from 'react';
import styles from './MyButton.module.css'

const MyButton = () => {
    return (
        <button className={styles.submitButton + ' NB-font'}>Оставить заявку</button>
    );
};

export default MyButton;