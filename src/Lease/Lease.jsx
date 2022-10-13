import React, { useState } from 'react';
import Form from '../Form/Form';
import Title from '../Title/Title';
import Values from '../Values/Values';
import styles from './Lease.module.css'

const Lising = () => {
    const [carPrice, setCarPrice] = useState(3300000)
    const [initPaymentPercent, setInitPaymentPercent] = useState(13)
    const [leaseTerm, setLeaseTerm] = useState(60)

    const fieldData = [
        { carPrice, setCarPrice },
        { initPaymentPercent, setInitPaymentPercent },
        { leaseTerm, setLeaseTerm }
    ]

    let initPayment = fieldData[0].carPrice * (fieldData[1].initPaymentPercent / 100)

    return (
        <div className={styles.lease_wrapper} >
            <Title />
            <div className={styles.form_wrapper}>
                <Form className='' fieldData={fieldData} initPayment={initPayment} />
                <Values fieldData={fieldData} initPayment={initPayment} />
            </div>
        </div >
    );
};

export default Lising;