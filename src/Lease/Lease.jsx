import React from 'react';
import styles from './Lease.module.css'

const Lising = () => {
    return (
        <div className={styles.lease_wrapper} >
            <h1 className={styles.title + ' NB-font black-title'}>Рассчитайте стоимость автомобиля в лизинг</h1>
            <div className="form_wrapper">
                <div className={styles.fields_wrapper}>
                    <div className={styles.input_wrapper}>
                        <label className={styles.labelDesc + ' G-font gray-label'} htmlFor="carPrice">Стоимость автобомиля</label>
                        <input className={styles.myInput + ' NB-font'} type="number" name='carPrice' required />
                        <input className={styles.slider} type="range" />
                        <label htmlFor="carPrice" className={styles.ruble + ' NB-font'}>₽</label>
                    </div>

                    <div className={styles.input_wrapper}>
                        <label className={styles.labelDesc + ' G-font gray-label'} htmlFor="initPayment">Первоначальный взнос</label>
                        <input className={styles.myInput + ' NB-font'} type="number" name='initPayment' required />
                        <input className={styles.slider} type="range" />
                        <label htmlFor="leaseTerm" className={styles.ruble + ' NB-font'}>
                            <span className={styles.percent + ' NB-font'}>13%</span>
                        </label>
                    </div>

                    <div className={styles.input_wrapper}>
                        <label className={styles.labelDesc + ' G-font gray-label'} htmlFor="leaseTerm">Срок лизинга</label>
                        <input className={styles.myInput + ' NB-font'} value='312432432' type="number" name='leaseTerm' required />
                        <input className={styles.slider} type="range" min={20} max={30} />
                        <label htmlFor="leaseTerm" className={styles.ruble + ' NB-font'}>мес.</label>
                    </div>
                </div>
                <div className={styles.values_wrapper}>
                    <div className={styles.value_wrapper}>
                        <label className={styles.labelDesc + ' G-font gray-label'}>Сумма договора лизинга</label>
                        <span className='NB-font black-value'>4 467 313 ₽</span>
                    </div>
                    <div className={styles.value_wrapper}>
                        <label className={styles.labelDesc + ' G-font gray-label'}>Ежемесячный платёж от</label>
                        <span className='NB-font black-value'>114 445 ₽</span>
                    </div>
                    <div className={styles.value_wrapper}>
                        <button className={styles.submitButton + ' NB-font'}>Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Lising;