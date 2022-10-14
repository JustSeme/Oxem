import React from 'react';
import styles from './MyButton.module.css'
import MyPreloader from './MyPreloader/MyPreloader';

const MyButton = ({ isRequested, disabled, ...props }) => {
    return (
        <button {...props} className={styles.submitButton + ' NB-font'} disabled={disabled}>{disabled ? <MyPreloader /> : 'Оставить заявку'}</button>
    );
};

export default MyButton;