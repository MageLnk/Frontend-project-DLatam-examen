import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button} from 'antd';
import { useForm } from '../../../hook/useForm';

// Token 
import GeneralContext from '../../../Context/GeneralContext';

const LoginContent = () => {

  // Token 

  const { handleLogin } = useContext(GeneralContext);
  
  const navigate = useNavigate();

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: '',
  });

  const onLogin = (e) => {
    e.preventDefault();

    // Validar campos de entrada
    if (!email || !password) {
      alert('Ingrese un email y una contraseña válidos.');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch('https://project-castle-production.up.railway.app/user/login', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al iniciar sesión');
        }


  handleLogin(response.accessToken);

        navigate('/dashboard', {
          replace: true,
          state: {
            logged: true,
          },
        });
        onResetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('No se pudo iniciar sesión. Por favor, inténtelo de nuevo.');
      });
  };

  return (
    <Row className='container container-p '>
      <Col xs={0} md={7}></Col>
      <Col xs={24} md={10} className='box-form text-center'>
        <h2>Iniciar Sesión</h2>
        <div className='line'></div>
        <form onSubmit={onLogin}>
          <div className='input-group'>
            <label htmlFor='name'>Email:</label>
            <input
              type='email'
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
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={onInputChange}
              required
              autoComplete='off'
            />
          </div>
          <Button className='black-red-button' onClick={onLogin}>
            Acceder
          </Button>
        </form>
      </Col>
      <Col xs={0} md={7}></Col>
    </Row>
  );
};

export default LoginContent;