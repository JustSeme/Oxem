import React from 'react';
import styles from './InputGroup.module.css'

const InputGroup = ({ label, labelHint, inputName, value, onValueChange, range }) => {

    const onChange = (e) => {
        let actualValue = e.target.value > range.min ? e.target.value : range.min
        actualValue = actualValue < range.max ? actualValue : range.max
        onValueChange(actualValue)
    }


    return (
        <div className={styles.input_wrapper}>
            <label className={styles.labelDesc + ' G-font gray-label'} htmlFor={inputName}>{label}</label>
            <input className={styles.myInput + ' NB-font'} type="number" value={Math.round(value)} onChange={onChange} name={inputName} required disabled={inputName === 'initPayment'} />
            <input className={styles.slider} type="range" min={range.min} max={range.max} onChange={onChange} />
            <label htmlFor={inputName} className={styles.ruble + ' NB-font'}>{labelHint}</label>
        </div>
    );
};

export default InputGroup;