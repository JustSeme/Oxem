import React from 'react';
import styles from './InputGroup.module.css'

const InputGroup = ({ label, labelHint, inputName }) => {
    return (
        <div className={styles.input_wrapper}>
            <label className={styles.labelDesc + ' G-font gray-label'} htmlFor={inputName}>{label}</label>
            <input className={styles.myInput + ' NB-font'} type="number" name={inputName} required />
            <input className={styles.slider} type="range" />
            <label htmlFor={inputName} className={styles.ruble + ' NB-font'}>{labelHint}</label>
        </div>
    );
};

export default InputGroup;