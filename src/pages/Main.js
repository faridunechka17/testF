import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/Slice';

const Main = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.api.status);

    const handleClick = () => {
        dispatch(fetchData());
    };

    return (
        <div className="container">
            <h1>Main</h1>
            <button onClick={handleClick} className="btn btn-primary">отправьте запрос</button>
            {status === 'loading' && <p>загрузка</p>}
            {status === 'succeeded' && <p>все успешно прошло!</p>}
            {status === 'failed' && <p>не успешно!</p>}
        </div>
    );
};

export default Main;