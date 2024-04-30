import React, { useEffect } from 'react';
import './seller.css';
import { Container, Row, Col } from 'reactstrap';
import { SELLER__DATA } from '../../../assets/data/data';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SellerSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5' data-aos="fade-up" data-aos-offset='50'>
            <div className="seller_section_title">
              <h3>Top Seller</h3>
            </div>
          </Col>

          {
            SELLER__DATA.map((item) => (
              <Col lg='2' md='3' sm='4' xs='6' key={item.id} className='mb-4' data-aos="fade-up" data-aos-offset='50'>
                <div className="single_seller_card d-flex align-items-center gap-3">
                  <div className="seller_img">
                    <img src={item.sellerImg} alt="" className='w-100' />
                  </div>

                  <div className="seller_content">
                    <h6>{item.sellerName}</h6>
                    <h6>{item.currentBid}</h6>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default SellerSection;
