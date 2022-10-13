import React from 'react';
import styles from './Form.module.css'
import InputGroup from './InputGroup/InputGroup';

const Form = () => {

    const percentJSX = <span className={styles.percent + ' NB-font'}>13%</span>

    return (
        <div className={styles.fields_wrapper}>
            <InputGroup label='Стоимость автомобиля' labelHint='₽' inputName='carPrice' />
            <InputGroup label='Первоначальный взнос' labelHint={percentJSX} inputName='initPayment' />
            <InputGroup label='Срок лизинга' labelHint='мес.' inputName='leaseTerm' />
        </div>
    );
};

export default Form;