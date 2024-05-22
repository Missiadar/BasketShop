import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <form className="auth-form">
                    <input
                        className="auth-form-control"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <input
                        className="auth-form-control"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <div className="auth-row">
                        {isLogin ? (
                            <div className="auth-nav-link">
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистроваться</NavLink>
                            </div>
                        ) : (
                            <div className="auth-nav-link">
                                Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        )}
                        <button className="auth-btn">
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default Auth;