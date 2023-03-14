import {InstagramFilled, PhoneFilled   } from '@ant-design/icons';
import {Row, Col, Card} from 'antd';
const { Meta } = Card;

const Partners = () => {

return (
        <>
        <Row>
          <div className="container text-center container-pb">
            <h2>NUESTROS PARTNERS</h2>
            <div className="line"></div>
                <Row gutter={16}>
                    <Col sm={12} lg={6}>
                        <Card
                        cover={<img alt="Partners 01" className="logo-partners" src='https://canni.cl/wp-content/uploads/2022/12/1-768x768.png' />}
                        >
                        <Meta title="Mei Store"/>
                        <h4 className="red-color"><InstagramFilled /> meistorenailsspa</h4>
                        <h4 className="red-color"><PhoneFilled />+56 9 5000 0825</h4>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card 
                        cover={<img alt="Partners 02" className="logo-partners" src="https://canni.cl/wp-content/uploads/2022/12/2-768x768.png" />}
                        >
                        <Meta title="Vaneliza"/>
                        <h4 className="red-color"><InstagramFilled /> vaneliza_cl</h4>
                        <h4 className="red-color"><PhoneFilled />+56 9 3692 4842</h4>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card 
                        cover={<img alt="Partners 03" className="logo-partners" src="https://canni.cl/wp-content/uploads/2022/12/3-768x768.png" />}
                        >
                        <Meta title="Pro-Cosmetic"/>
                        <h4 className="red-color"><InstagramFilled /> procosmetics.cl</h4>
                        <h4 className="red-color"><PhoneFilled />+56 9 6662 2588</h4>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card
                        cover={<img alt="Partners 04" className="logo-partners" src="https://canni.cl/wp-content/uploads/2022/12/4-768x768.png" />}
                        >
                        <Meta title="Naty Nails"/>
                        <h4 className="red-color"><InstagramFilled /> naty_nails</h4>
                        <h4 className="red-color"><PhoneFilled />+56 9 2006 7864</h4>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Row> 
      </>
)
}
export default Partners;