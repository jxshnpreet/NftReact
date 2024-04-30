import React, { useEffect } from 'react';
import './Trending.css';
import { Container, Row, Col } from 'reactstrap';
import { NFT__DATA } from '../../../assets/data/data';
import NftCard from '../NFT Card/NftCard';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const TrendingSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800 }); 
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h3 className="trending_title mb-5" data-aos="fade-up" data-aos-offset='50'>
              Trending
            </h3>
          </Col>

          {NFT__DATA.slice(0, 8).map(item => (
            <Col lg='3' md='4' sn='6' key={item.id} className='mb-4' data-aos="fade-up" data-aos-offset='50'>
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrendingSection;
