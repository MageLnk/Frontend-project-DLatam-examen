import { Button } from "antd";
import { useNavigate,  useLocation } from "react-router-dom";

const DashboardContent = () => {

const { state } = useLocation();   
const navigate = useNavigate();


const onLogout = () => {
    navigate('/login', {replace:true,
    });
};

    return ( 

    <div className="container container-p text-center">
        <h1>Hola, {state?.name}</h1>

        <Button onClick={onLogout} className="black-red-button">Cerrar sesión</Button>
    </div>

  )

}

export default DashboardContent;