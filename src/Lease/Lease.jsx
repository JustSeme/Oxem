import React from 'react';
import Form from '../Form/Form';
import Title from '../Title/Title';
import Values from '../Values/Values';
import styles from './Lease.module.css'

const Lising = () => {
    return (
        <div className={styles.lease_wrapper} >
            <Title />
            <div className="form_wrapper">
                <Form />
                <Values />
            </div>
        </div >
    );
};

export default Lising;