import { useNavigate } from 'react-router-dom';
import { Row, Col, Button} from 'antd';
import { useForm } from '../../../hook/useForm';



const LoginContent = () => {

const navigate = useNavigate()    

const {name, email, password, onInputChange, onResetForm} = useForm ({
    name:'',
    email:'',
    password:'',  
})

const onLogin = (e) => {
    e.preventDefault()

    navigate('/dashboard', {
        replace: true, 
        state: {
            logged:true,
            name
        }
    })

    onResetForm ();
};

    return (

            <Row className='container container-p '>
                <Col xs={0} md={7}> </Col>
                <Col xs={24} md={10} className="box-form text-center">
                        <h2>Iniciar Sesión</h2>
                        <div className='line'></div>
                        <form onSubmit={onLogin}> 
                        <div className='input-group'>
                            <label htmlFor='name'>Nombre</label>
                            <input 
                                type="text" 
                                name='name' 
                                id='name' 
                                value={name}
                                onChange={onInputChange}
                                required
                                autoComplete='off'
                                />
                               
                        </div>
                        <div className='input-group'>
                            <label htmlFor='name'>Email:</label>
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
                        <Button className='black-red-button' onClick={onLogin}>Acceder</Button>   
                    </form>
                </Col>
                <Col xs={0} md={7} > </Col>
        </Row>     
    )
    
    }
    
export default LoginContent;