import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NFT__DATA } from '../../../assets/data/data';
import SingleCollection from '../SingleCollection/SingleCollection';

const TopCollection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h3 className="trending_title mb-5">
                        Top Collection
                    </h3>
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