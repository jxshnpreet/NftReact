import React from 'react';
import './single-collection.css';
import { Link } from 'react-router-dom';

const SingleCollection = (props) => {

    const { id, name, imgUrl, collection, creatorImg } = props.item;

  return (
    <div className="single_collection_card">
        <div className="collection_img">
            <div className="image-wrapper">
            <img src={imgUrl} alt="" className="w-100 zoom-on-hover" />
            </div>

            {/* Circular image */}
            <div className="circular-img-container">
            <a
                href="https://unsplash.com/photos/a-mountain-in-the-middle-of-a-body-of-water-aE6F7CmHnx0"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={creatorImg} alt="" className="circular-img" />
            </a>
            </div>
        </div>

        <div className="additional-images">
            <div className="additional-image">
            <img src={collection} alt="" />
            </div>
            <div className="additional-image">
            <img src={collection} alt="" />
            </div>
            <div className="additional-image">
            <img src={collection} alt="" />
            </div>
        </div>
        
        <div className="nft_content">
            <h5 className='nft_title mt-3 mb-2'>
                <Link to={`/market/${id}`}>{name}</Link>
            </h5>
        </div>
        
    </div>
  )
}

export default SingleCollection;