import '../../HeaderContent/style.css'
import { HeartFilled } from '@ant-design/icons';

const Topbar = () => {
    return (
        <div className="top-bar background-grey white-color">
            <p><HeartFilled />ENVÍO GRATIS en pedidos sobre $ 50.000 | correo: contacto@canni.cl</p>
        </div>
    )
}

export default Topbar;