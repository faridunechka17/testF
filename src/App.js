import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [regis, setRegis] = useState(false)
    const [error, setError] = useState('')

    const userRegis = () => {
        if (!username || !password || !confirmPassword) {
            setError('');
            return alert('заполните все поля!')
        }else if (password !== confirmPassword) {
            setError('');
            return alert('пароли должны совпадать')
        }else if (regis) {
            setError('');
            return alert('такой пользователь уже существует')
        }else {
            setRegis(true);
            setError('');
            alert('успешно прошли регистрацию!');
        }
    };

    return (
        <div>
            <div>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="имя пользователя" value={username}/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="пароль" value={password}/>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="подтвердите пароль" value={confirmPassword}/>

                <button onClick={userRegis}>регистрация</button>
            </div>
            {error && <p>{error}</p>}

        </div>
    );
};

export default RegistrationForm;