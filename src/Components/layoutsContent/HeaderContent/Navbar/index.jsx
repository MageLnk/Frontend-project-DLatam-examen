import '../../HeaderContent/style.css'
import { Row, Col, Menu } from 'antd';
import logo from '../../../../assets/images/Logo_Canni.webp';
import { UserOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
   return (
        <div className="menu">
            <Row className="container">
                <Col span={12}>
                <img src={logo} className="logo"/>
                </Col>
                <Col span={12} className="menu_principal">
                    <Menu 
                    style={{float: 'right'}}
                    mode="horizontal"
                    items={[
                    { label:"", key:"Account", icon:<UserOutlined />},
                    { label:"", key:"cart", icon:<ShoppingCartOutlined />},
                    { label:"", key:"category", icon:<MenuOutlined />,
                    children:[ 
                        {label: "Esmaltes", key: "esmaltes"},
                        {label: "Painting gel", key: "painting gel"},
                        {label: "Herramientas y accesorios", key: "herramientas y accesorios"},
                        {label: "Nail Extension", key: "nail Extension"},
                        {label: "Aceite y suavizante", key: "aceite y suavizante"},
                        {label: "Efectos y colecciones", key: "efectos y colecciones"},
                    ]}
                    ,
                    ]}
                    ></Menu>
                </Col>
            </Row>
        </div>
        )
    }
export default Navbar;

