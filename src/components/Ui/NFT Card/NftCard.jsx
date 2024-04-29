import React, { useEffect } from 'react';
import './nft-card.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NftCard = (props) => {
    const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item;
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <div className="single_nft_card" data-aos="fade-up">
            <div className="nft_img">
                <img src={imgUrl} alt="" className='w-100' />
            </div>

            <div className="nft_content">
                <h5 className='nft_title'>
                    <Link to={`/market/${id}`}>{title}</Link>
                </h5>
                <div className="creator_info-wrapper d-flex gap-3">
                    <div className="creator_img">
                        <img src={creatorImg} alt="" className='w-100' />
                    </div>

                    <div className="creator_info w-100 d-flex align-items-center justify-content-between" >
                        <div>
                            <h6>{creator}</h6>
                            <p>Highest Bid 6/30</p>
                        </div>

                        <div>
                            <h6>Current Bid</h6>
                            <p>{currentBid} ETH</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex mt-3 align-items-center justify-content-between gap-2'>
                    <button className="bid_btn d-flex align-items-center gap-1" onClick={() => setShowModal(true)}>
                        <i className="ri-shopping-bag-4-line"></i>Place Bid
                    </button>

                    { showModal && <Modal setShowModal={setShowModal} /> }

                    <span className='history_link'><Link to="#">View History</Link></span>
                </div>

            </div>
        </div>
    )
}

export default NftCard;
