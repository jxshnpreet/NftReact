import React, { useRef, useState, useEffect, useMemo } from 'react';
import './hero-section.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero.png';

const HeroSection = () => {
  const imgRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [counts, setCounts] = useState([0, 0, 0]);
  const targetCounts = useMemo(() => [3091, 1020, 5329], []);
  const duration = 50000; // in milliseconds
  const interval = 10; // in milliseconds

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const offsetX = clientX - left - width / 2;
    const offsetY = clientY - top - height / 2;
    const tiltX = (offsetY / height / 2).toFixed(2);
    const tiltY = (offsetX / width / 2).toFixed(2);

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const updateCounts = (index) => {
      setTimeout(() => {
        if (counts[index] < targetCounts[index]) {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] += Math.ceil((targetCounts[index] - counts[index]) / (duration / interval));
            return newCounts;
          });
          updateCounts(index);
        }
      }, interval);
    };

    targetCounts.forEach((_, index) => {
      updateCounts(index);
    });

    return () => {
      clearTimeout();
    };
  }, [counts, targetCounts, duration, interval]);

  const odometerTitle = ['Collectibles', 'Auctions...', 'NFT Artist'];

  return (
    <section className="hero_section">
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
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className='create_btn d-flex align-items-center gap-2'>
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div
              className="hero_img"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x * 25}deg) rotateY(${tilt.y * 25}deg)`
              }}
            >
              <img ref={imgRef} src={heroImg} alt="" className='w-100' />

              <div className="joined-people-wrapper">
              <div className="product-share-wrapper">
                <div className="profile-share">
                  <h2>More than 25K</h2>
                  <p className='desc'>
                    Million of people are sell there NFTs in Nuron marketplaces. Create & Sell Your NFT's.
                  </p>
                </div>
              </div>
            </div>
            </div>


          </Col>

          <Col lg="7">
            <div className="odometer_slide d-flex mt-60 gap-3">
              {counts.map((count, index) => (
                <div className="odometer_inner" key={index}>
                  <h2>{Math.min(count, targetCounts[index])}</h2>
                  <p className='para'>{odometerTitle[index]}</p>
                </div>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;
