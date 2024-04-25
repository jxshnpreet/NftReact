import React from 'react';
import './top-collection.css';
import { Container, Row, Col } from 'reactstrap';
import { NFT__DATA } from '../../../assets/data/data';
import { Link } from 'react-router-dom';
import SingleCollection from '../SingleCollection/SingleCollection';

const TopCollection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5' >
                    <div className="top-collection d-flex align-items-center justify-content-between">
                    <h3 className="top_collction_title">
                        Top Collection
                    </h3>
                    <span><Link to='/market'>View all</Link></span>
                    </div>
                </Col>

            {
                NFT__DATA.slice(0,4).map(item => (
                    <Col lg='3' md='4' sn='6' key={item.id} className='mb-4'>
                        <SingleCollection item={item}/>
                    </Col>
                ))
            }

            </Row>
        </Container>
    </section>
  );
};

export default TopCollection;