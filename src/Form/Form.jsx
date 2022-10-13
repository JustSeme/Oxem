import React from 'react';
import styles from './Form.module.css'
import InputGroup from './InputGroup/InputGroup';

const Form = ({ fieldData, initPayment, className }) => {
    const range = {
        carPrice: {
            min: 1000000,
            max: 6000000,
        },
        initPaymentPercent: {
            min: 10,
            max: 60
        },
        leaseTerm: {
            min: 1,
            max: 60
        }
    }

    const percentJSX = <span className={styles.percent + ' NB-font'}>{fieldData[1].initPaymentPercent}%</span>
    return (
        <div className={styles.fields_wrapper}>
            <InputGroup
                label='Стоимость автомобиля'
                labelHint='₽' inputName='carPrice'
                value={fieldData[0].carPrice}
                onValueChange={fieldData[0].setCarPrice}
                range={range.carPrice}
            />
            <InputGroup
                label='Первоначальный взнос'
                labelHint={percentJSX}
                inputName='initPayment'
                value={initPayment}
                valuePercent={fieldData[1].initPaymentPercent}
                onValueChange={fieldData[1].setInitPaymentPercent}
                range={range.initPaymentPercent}
            />
            <InputGroup
                label='Срок лизинга'
                labelHint='мес.'
                inputName='leaseTerm'
                value={fieldData[2].leaseTerm}
                onValueChange={fieldData[2].setLeaseTerm}
                range={range.leaseTerm}
            />
        </div>
    );
};

export default Form;