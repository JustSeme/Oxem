import React from 'react';
import styles from './Values.module.css'
import groupStyle from './ValueGroup/ValueGroup.module.css'
import ValueGroup from './ValueGroup/ValueGroup';
import MyButton from '../UI/MyButton/MyButton';

const Values = ({ fieldData, initPayment }) => {

    const monthPay = (fieldData[0].carPrice - initPayment) * ((0.035 * Math.pow((1 + 0.035), fieldData[2].leaseTerm)) / (Math.pow((1 + 0.035), fieldData[2].leaseTerm) - 1));
    const contractAmount = initPayment + fieldData[2].leaseTerm * monthPay

    function mask3digits(number) {
        let a = Math.round(number).toString().split(''),
            result = [],
            start;
        while ((start = a.length - 3) > 0) {
            result.unshift(a.splice(start, 3));
        }
        result.unshift(a);
        return result
    }

    return (
        <div className={styles.values_wrapper}>
            <ValueGroup title='Сумма договора лизинга' displayedValue={mask3digits(contractAmount)} />
            <ValueGroup title='Ежемесячный платёж от' displayedValue={mask3digits(monthPay)} />
            <div className={groupStyle.value_wrapper + ' ' + styles.float_right}>
                <MyButton />
            </div>
        </div>
    );
};

export default Values;