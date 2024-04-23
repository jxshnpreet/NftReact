import React from 'react';
import { Link } from 'react-router-dom';

const NftCard = (props) => {

    const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item;

  return (
    <div className="single_nft_card">
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
                                        <div >
                                            <h6>{creator}</h6>
                                            <p>Highest Bid 6/30</p>
                                        </div>

                                        <div >
                                            <h6>Current Bid</h6>
                                            <p>{currentBid} ETH</p>
                                        </div>
                                    </div>
                            </div>

                            <div className='d-flex mt-3 align-items-center justify-content-between gap-2'>
                                <button className="bid_btn d-flex align-items-center gap-1"><i class="ri-shopping-bag-4-line"></i>Place Bid</button>

                                <span className='history_link'><Link to="#">View History</Link></span>
                            </div>

                        </div>
                    </div>
  )
}

export default NftCard;