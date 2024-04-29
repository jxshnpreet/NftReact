import React, { useEffect } from 'react';
import './video-area.css';
import videoImg from '../../../assets/images/bg-image-21.jpg';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoArea = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5' data-aos="fade-up">
            <div className='title-area text-center'>
              <h3 className='title mb-4'>
                Meet with Nuron
              </h3>
              <p className="subtitle">
                An NFT is a digital asset that represents real-world objects like art, music, in-game items, and videos. They are bought and sold online.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg='12' className='position' data-aos="fade-up">
            <button type='button' aria-label='Play video' className='video-play-button btn-large with-animation'>
              <span><i className="ri-google-play-fill"></i></span>
            </button>
            <div className="video-wrapper">
              <img src={videoImg} alt=" Video BG" style={{ color: 'transparent' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VideoArea;
