import React from 'react';
import './live-auction.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import NftCard from '../NFT Card/NftCard';
import { NFT__DATA } from '../../../assets/data/data';

const LiveAuction = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <div className="live_auction_top d-flex align-items-center justify-content-between">
                        <h3>Live Auction</h3>
                        <span><Link to='/market'>Explore more</Link></span>
                    </div>
                </Col>

                    {
                        NFT__DATA.slice(0,1).map((item) => (
                            <Col lg='3' md='4' sm='6' className='mb-4'>
                            <NftCard key={item.id} item={item} />
                            </Col>
                        ))
                    }
                
            </Row>
        </Container>
    </section>
  )
}

export default LiveAuction;