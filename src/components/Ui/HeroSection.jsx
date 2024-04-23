import React from 'react';
import './hero-section.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero.png';

const HeroSection = () => {
  return (
    <section className= "hero_section">
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="hero_content">
                        <h2>
                        Buy and sell digital art
                            <span> NFTs Collections</span>
                        </h2>
                        <p>There is enough digital artworks available online to help you put together crypto currency website.</p>

                        <div className="hero_btns d-flex align-items-center gap-4">
                            <button className='explore_btn d-flex align-items-center gap-2'>
                                <i class="ri-rocket-line"></i>
                                <Link to="/market">Explore</Link>
                            </button>
                            <button className='create_btn d-flex align-items-center gap-2'>
                                <i class="ri-ball-pen-line"></i>
                                <Link to="/create">Create</Link>
                            </button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="hero_img">
                        <img src={heroImg} alt="" className='w-100' />
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default HeroSection;