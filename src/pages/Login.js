import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import './Login.css';

const Login = () => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === process.env.REACT_APP_ADMIN_USER && password === process.env.REACT_APP_ADMIN_PASS) {
            setIsAuthenticated(true);
            navigate('/menu');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Prihlásenie</h2>
                <div className="input-field">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label>Email</label>
                </div>
                <div className="input-field">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label>Heslo</label>
                </div>
                <input type="submit" value="Prihlásiť" />
            </form>
        </div>
    );
}

export default Login;