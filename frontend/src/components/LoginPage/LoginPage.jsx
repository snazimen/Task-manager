import React, { useState } from 'react';
import style from './LoginPage.module.css'





const LoginPage = () => {

    fetch('')
    .then(responce => {
        if(!responce.ok){
            throw new Error('No connect')
        }
        return responce.json();
    })
    .then(data => {
        console.log('Ответ с сервера' , data)
    })
    .catch(error => {
        console.error('Ошибка', error)
    });


    return (
        <div className={style.loginPage__container}>
            <div className={style.login__module__window}>
                <div className={style.login}>
                    <h2 className={style.h2}>Login</h2>
                    <input 
                    className={style.input} 
                    type="text" 
                    placeholder='Логин' 
                    />
                    <input 
                    className={style.input} 
                    type="text" 
                    placeholder='Пароль' 
                    />

                    <button className={style.button}>Отправить</button>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;