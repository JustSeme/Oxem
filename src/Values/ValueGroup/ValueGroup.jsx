import React from 'react';
import styles from './ValueGroup.module.css'

const ValueGroup = ({ title, displayedValue }) => {
    displayedValue.map(element => {
        element.push(' ')
        return element
    });

    return (
        <div className={styles.value_wrapper}>
            <label className={styles.labelDesc + ' G-font gray-label'}>{title}</label>
            <span className='NB-font black-value'>{displayedValue ? displayedValue : 0}</span>
        </div>
    );
};

export default ValueGroup;