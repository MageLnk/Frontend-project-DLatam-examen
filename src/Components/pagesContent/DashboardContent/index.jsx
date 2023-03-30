//Components

import { Button } from "antd";
import { useNavigate } from "react-router-dom";

// Context

import { useContext } from "react";
import GeneralContext from "../../../Context/GeneralContext";

// Assets

import Welcome from "../../../assets/images/welcome.png"

// Style 

import './style.css'

const DashboardContent = () => {
  const { handleLogout } = useContext(GeneralContext);

  const navigate = useNavigate();


  const handleLogoutAndRedirect = () => {
    handleLogout();
    navigate('/');
  }

  return (
    <div className="container container-p text-center">
          <img src={Welcome} alt="" className="t-image"/>
          <h1>Hola, has iniciado sesión en Canni.cl</h1>
          <Button onClick={handleLogoutAndRedirect} className="black-red-button">
            Cerrar sesión
          </Button>
    </div>
  );
};

export default DashboardContent;




