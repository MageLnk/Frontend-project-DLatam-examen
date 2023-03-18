import '../../HeaderContent/style.css'
import { Row, Col, Menu } from 'antd';
import logo from '../../../../assets/images/Logo_Canni.webp';
import { UserOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

   const Navigate = useNavigate();
    
   return (
        <div className="menu">
            <Row className="container">
                <Col span={12}>
                <Link to="/"><img src={logo} className="logo" /></Link>
                </Col>
                <Col span={12} className="menu_principal">
                    <Menu 
                    style={{float: 'right'}}
                    onClick={({key})=>{
                        Navigate(key);

                    }}
                    mode="horizontal"
                    items={[
    
                    { label:"", key:"login", icon:<UserOutlined /> },
                    { label:"", key:"cart", icon:<ShoppingCartOutlined />},
                    { label:"", key:"category", icon:<MenuOutlined />,
                    children:[ 
                        {label: "Esmaltes", key:"/product-category/esmaltes"},
                        {label: "Painting gel", key:"/product-category/painting gel"},
                        {label: "Herramientas y accesorios", key:"/product-category/herramientas y accesorios"},
                        {label: "Nail Extension", key:"/product-category/nail extension"},
                        {label: "Aceite y suavizante", key:"/product-category/aceite y suavizante"},
                        {label: "Efectos y colecciones", key:"/product-category/efectos y colecciones"},
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


