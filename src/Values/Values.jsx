import React from 'react';
import styles from './Values.module.css'
import groupStyle from './ValueGroup/ValueGroup.module.css'
import ValueGroup from './ValueGroup/ValueGroup';
import MyButton from '../UI/MyButton/MyButton';

const Values = () => {
    return (
        <div className={styles.values_wrapper}>
            <ValueGroup title='Сумма договора лизинга' displayedValue='4 467 313 ₽' />
            <ValueGroup title='Ежемесячный платёж от' displayedValue='114 445 ₽' />
            <div className={groupStyle.value_wrapper}>
                <MyButton />
            </div>
        </div>
    );
};

export default Values;