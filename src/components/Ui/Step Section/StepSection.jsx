import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const StepSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h3 className="step_title">
                        Create and sell your NFTs
                    </h3>
                </Col>
                <Col lg='3'>
                    <div className="single_step">
                        <span><i class="ri-wallet-line"></i></span>
                        <div className="step_item_content">
                            <h5>
                                <Link to='/wallet'>Setup your wallet</Link>
                            </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique earum, quis delectus totam eveniet itaque.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default StepSection;