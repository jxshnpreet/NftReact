import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './step-section.css';
import icon1 from '../../../assets/images/shape-1.png';
import icon2 from '../../../assets/images/shape-5.png';
import icon3 from '../../../assets/images/shape-6.png';
import icon4 from '../../../assets/images/shape-7.png';

const STEP_DATA = [
    {
        title: 'Setup your wallet',
        desc: 'Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.',
        icon: icon1
    },
    {
        title: 'Create your collection',
        desc: 'A great collection of beautiful website templates for your need. Choose the best suitable template.',
        icon: icon2
    },
    {
        title: "Add your NFT's",
        desc: "We've made the template fully respoonsive, so it looks great on all devices: desktop, tablets.",
        icon: icon3
    },
    {
        title: "Sell you NFT's",
        desc: 'I throw myself down among the tall grass by the stream as i lie close to the reath NFTs',
        icon: icon4
    },

]

const StepSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h3 className="step_title">
                        Create and sell your NFTs
                    </h3>
                </Col>

                {
                    STEP_DATA.map((item, index) => (
                        <Col lg="3" md='4' sm="6" key={index} className='mb-4'>
                            <div className="single_step_item">
                                <span><img src={item.icon} /></span>
                                <div className="step_item_content">
                                    <h5>
                                        <Link to='/wallet'>{item.title}</Link>
                                    </h5>
                                    <p className='mb-0'>{item.desc}</p>
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

export default StepSection;