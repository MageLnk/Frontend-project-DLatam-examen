// Components

import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Menu } from "antd";
import logo from "../../../../assets/images/Logo_Canni.webp";
import { UserOutlined, ShoppingCartOutlined, MenuOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import GeneralContext from "../../../../Context/GeneralContext";
import { useContext } from "react";

// Style

import "../../HeaderContent/style.css";

const Navbar = () => {
  const Navigate = useNavigate();
  const { isAuthenticated } = useContext(GeneralContext); // Obtener isAuthenticated desde el contexto

  return (
    <>
      {isAuthenticated ? ( // Usar isAuthenticated para cambiar el contenido del menú si el usuario ha iniciado sesión
        <div className="menu">
          <Row className="container">
            <Col span={12}>
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </Col>
            <Col span={12} className="menu_principal">
              <Menu
                onClick={({ key }) => {
                  Navigate(key);
                }}
                mode="horizontal"
                items={[
                  { label: "Perfil", key: "dashboard", icon: <UserOutlined /> },
                  { label: "Carrito", key: "cart", icon: <ShoppingCartOutlined /> },
                  {
                    label: "Menu",
                    key: "category",
                    icon: <MenuOutlined />,
                    children: [
                      { label: "Esmalte", key: "/product-category/esmalte".replace(/ /g, "-") },
                      { label: "Painting gel", key: "/product-category/painting gel".replace(/ /g, "-") },
                      {
                        label: "Herramientas y accesorios",
                        key: "/product-category/herramientas y accesorios".replace(/ /g, "-"),
                      },
                      { label: "Nail Extension", key: "/product-category/nail extension".replace(/ /g, "-") },
                      { label: "Aceite y suavizante", key: "/product-category/aceite y suavizante".replace(/ /g, "-") },
                      {
                        label: "Efectos y colecciones",
                        key: "/product-category/efectos y colecciones".replace(/ /g, "-"),
                      },
                    ],
                  },
                ]}
              ></Menu>
            </Col>
          </Row>
        </div>

      ) : (

        <div className="menu">
          <Row className="container">
            <Col span={12}>
              <Link to="/">
                <img src={logo} className="logo" alt="" />
              </Link>
            </Col>
            <Col span={12} className="menu_principal ">
              <Menu
                onClick={({ key }) => {
                  Navigate(key);
                }}
                mode="horizontal"
                items={[
                  { label: "Inicio sesión", key: "login", icon: <UserOutlined /> },
                  { label: "Registro", key: "register", icon: <UsergroupAddOutlined /> },
                  { label: "Carrito", key: "cart", icon: <ShoppingCartOutlined /> },
                  {
                    label: "Menu",
                    key: "category",
                    icon: <MenuOutlined />,
                    children: [
                      { label: "Esmalte", key: "/product-category/esmalte".replace(/ /g, "-") },
                      { label: "Painting gel", key: "/product-category/painting gel".replace(/ /g, "-") },
                      {
                        label: "Herramientas y accesorios",
                        key: "/product-category/herramientas y accesorios".replace(/ /g, "-"),
                      },
                      { label: "Nail Extension", key: "/product-category/nail extension".replace(/ /g, "-") },
                      { label: "Aceite y suavizante", key: "/product-category/aceite y suavizante".replace(/ /g, "-") },
                      {
                        label: "Efectos y colecciones",
                        key: "/product-category/efectos y colecciones".replace(/ /g, "-"),
                      },
                    ],
                  },
                ]}
              ></Menu>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Navbar;
