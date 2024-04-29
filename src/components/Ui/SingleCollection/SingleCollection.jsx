import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './single-collection.css';
import { Link } from 'react-router-dom';

const SingleCollection = (props) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const { id, name, imgUrl, collection, creatorImg } = props.item;

  return (
    <div className="single_collection_card" data-aos="fade-up">
      <div className="collection_img">
        <div className="image-wrapper">
          <img src={imgUrl} alt="" className="w-100 zoom-on-hover" />
        </div>

        <div className="circular-img-container">
          <img src={creatorImg} alt="" className="circular-img" />
        </div>
      </div>

      <div className="additional-images">
        {collection.map((image, index) => (
          <div className="additional-image" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="collection_content d-flex justify-content-between align-items-center">
        <h5 className='collection_title mt-3 mb-0'>
          <Link to={`/market/${id}`}>{name}</Link>
        </h5>
        <span className='items mt-3'
          style={{ color: '#fff', border: '1px solid #212e48', borderRadius: '10px', fontSize: '.9rem', background: '#212e48', padding: '3px' }}>
          15 items
        </span>
      </div>

    </div>
  );
}

export default SingleCollection;
