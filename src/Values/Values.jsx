import React from 'react';
import styles from './Values.module.css'
import groupStyle from './ValueGroup/ValueGroup.module.css'
import ValueGroup from './ValueGroup/ValueGroup';
import MyButton from '../UI/MyButton/MyButton';
import axios from 'axios';

const Values = ({ fieldData, initPayment, isRequested, setIsRequested }) => {

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

    const onButtonClick = () => {
        const data = {
            car_coast: +fieldData[0].carPrice,
            initial_payment: +initPayment,
            initial_payment_percent: +fieldData[1].initPaymentPercent,
            lease_term: +fieldData[2].leaseTerm,
            total_sum: +contractAmount,
            monthly_payment_from: +monthPay
        }
        setIsRequested(true)
        axios.post('https://hookb.in/eK160jgYJ6UlaRPldJ1P', JSON.stringify(data))
            .then(resp => setIsRequested(false))
            .catch(err => {
                alert(err)
                setIsRequested(false)
            })
    }

    return (
        <div className={styles.values_wrapper}>
            <ValueGroup title='Сумма договора лизинга' displayedValue={mask3digits(contractAmount)} />
            <ValueGroup title='Ежемесячный платёж от' displayedValue={mask3digits(monthPay)} />
            <div className={groupStyle.value_wrapper + ' ' + styles.float_right}>
                <MyButton isRequested={isRequested} onClick={onButtonClick} disabled={isRequested} />
            </div>
        </div>
    );
};

export default Values;