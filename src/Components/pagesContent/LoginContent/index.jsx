import { Row, Col, Button, Checkbox, Form, Input } from 'antd';
import './style.css'


const LoginContent = () => {

    return (

            <Row className='container container-p text-center'>
                <Col span={11} className="box-form">
                        <h2>Acceder</h2>

                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                        >
                            <Form.Item
                            label="Correo electrónico"
                            name="email"
                            rules={[{ required: true, message: '¡Por favor ingrese tu correo electrónico!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Contraseña"
                            name="password"
                            rules={[{ required: true, message: '¡Por favor ingrese su contraseña!' }]}
                            >
                            <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item>
                            <Button className='background-red white-color' htmlType="submit">
                                Acceder
                            </Button>
                            </Form.Item>
                        </Form>

                </Col>

                <Col span={11} className="box-form"> 

                    <h2>Registrarse</h2>
                    <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                        >
                            <Form.Item
                            label="Correo electrónico"
                            name="email"
                            rules={[{ required: true, message: '¡Por favor ingrese tu correo electrónico!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Contraseña"
                            name="password"
                            rules={[{ required: true, message: '¡Por favor ingrese su contraseña!' }]}
                            >
                            <Input.Password />
                            </Form.Item>

                            <Form.Item>
                            <Button className='background-red white-color' htmlType="submit">
                                Registrarse
                            </Button>
                            </Form.Item>
                        </Form>
                </Col>
        </Row>     



    )
    
    }
    
export default LoginContent;