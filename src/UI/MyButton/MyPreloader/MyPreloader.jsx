import React from 'react';
import styles from './MyPreloader.module.css'

const MyPreloader = () => {
    return (
        <div className={styles.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default MyPreloader;