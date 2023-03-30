import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, message } from 'antd';
import { useForm } from '../../../hook/useForm';
import { useState } from 'react';


const RegisterContent = () => {

    const navigate = useNavigate();

    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const onRegister = (e) => {
        e.preventDefault();
        setLoading(true);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        };

        fetch('https://project-castle-production.up.railway.app/user', requestOptions)
            .then(response => {
                setLoading(false);
                if (response.ok) {
                    message.success('¡Registro exitoso!');
                    navigate('/dashboard', {
                        replace: true,
                        state: {
                            logged: true,
                            username
                        }
                    });
                    onResetForm();
                } else {
                    message.error('No se pudo registrar el usuario.');
                }
            })
            .catch(error => {
                setLoading(false);
                console.error('There was an error registering the user:', error);
                message.error('Hubo un error al registrar el usuario.');
            });
    };

    return (
        <Row className='container container-p text-center'>
            <Col xs={0} md={7}></Col>
            <Col xs={24} md={10} className="box-form">
                <h2>Registro</h2>
                <div className='line'></div>
                <form onSubmit={onRegister}>
                    <div className='input-group'>
                        <label htmlFor='username'>Nombre</label>
                        <input
                            type="text"
                            name='username'
                            id='username'
                            value={username}
                            onChange={onInputChange}
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            value={email}
                            onChange={onInputChange}
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Contraseña: </label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            value={password}
                            onChange={onInputChange}
                            required
                            autoComplete='off'
                        />
                    </div>
                    <Button
                        className='black-red-button'
                        onClick={onRegister}
                        loading={loading}
                        disabled={loading}
                    >
                        Registrarse
                    </Button>
                </form>
            </Col>
            <Col xs={0} md={7}></Col>
        </Row>
    );
};

export default RegisterContent;