import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const status = useSelector((state) => state.api.status);
    const navigate = useNavigate();

    if (status !== 'succeeded') {
        alert('отправьте сначала запрос и потом можете переходить на следующую страницу');
        navigate('/Main');
    }

    return (
        <div className="container">
            <h1>Menu</h1>
            <p>добро пожаловать!</p>
        </div>
    );
};

export default Menu;