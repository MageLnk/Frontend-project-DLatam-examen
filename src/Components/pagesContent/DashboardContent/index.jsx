import { useContext } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import GeneralContext from "../../../Context/GeneralContext";

const DashboardContent = () => {

const { handleLogout } = useContext(GeneralContext);
const navigate = useNavigate();
 

const handleLogoutAndRedirect = () => {
    handleLogout();
    navigate('/');
  }

  return (
    <div className="container container-p text-center">
      <h1>Hola, </h1>
      <Button onClick={handleLogoutAndRedirect} className="black-red-button">
        Cerrar sesión
      </Button>
    </div>
  );
};

export default DashboardContent;
