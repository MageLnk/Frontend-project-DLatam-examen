import {Row, Col, Button } from 'antd';

const Categorias = () => {

return (
    <div className='container-p'>
        <Row className="container text-center">

            <h2 style={{width: '100%'}}>CATEGORÍAS</h2>
            <div className="line"></div>
        
            <Col xs={24} sm={24} lg={8}>
                <div className="box categoria-01">
                    <div className="contenido-box">
                        <h2>ESMALTES</h2>
                        <Button className="black-button">Ver más</Button>
                    </div> 
                </div>
            </Col>
            <Col xs={24} sm={24} lg={8}>
                <div className="box categoria-02">
                    <div className="contenido-box">
                        <h2>PAINTING GEL</h2>
                        <Button className="black-button">Ver más</Button>
                    </div> 
                </div>
            </Col>
            <Col xs={24} sm={24} lg={8}>
                <div className="box categoria-03">
                    <div className="contenido-box">
                        <h2>HERRAMIENTAS Y ACCESORIOS</h2>
                        <Button className="black-button">Ver más</Button>
                    </div> 
                </div>
            </Col>
        </Row>
        <Row className="container">
            <Col xs={24} sm={24} lg={8}>
                <div className="box categoria-04">
                    <div className="contenido-box">
                        <h2>NAILS EXTENSION</h2>
                        <Button className="black-button">Ver más</Button>
                    </div> 
                </div>
            </Col>
            <Col xs={24} sm={24} lg={8}>
                <div className="box categoria-05">
                    <div className="contenido-box ">
                        <h2>ACEITE Y SUAVIZANTE</h2>
                        <Button className="black-button">Ver más</Button>
                    </div> 
                </div>
            </Col>
            <Col xs={24} sm={24} lg={8}>
                <div className="box categoria-06">
                    <div className="contenido-box">
                        <h2>EFECTOS Y COLLECIONES</h2>
                        <Button className="black-button">Ver más</Button>
                    </div> 
                </div>
            </Col>
        </Row>
    </div>
    )  
}

export default Categorias;