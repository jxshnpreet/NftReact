import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./collection.css";

const LIST_DATA = [
  {
    title: "ART",
    icon: "ri-file-image-fill",
  },
  {
    title: "Music",
    icon: "ri-folder-music-line",
  },
  {
    title: "Digital Worlds",
    icon: "ri-global-line",
  },
  {
    title: "Domain Name",
    icon: "ri-search-eye-line",
  },
  {
    title: "Collectables",
    icon: "ri-windows-fill",
  },
  {
    title: "Trending Cards",
    icon: "ri-line-chart-fill",
  },
];

const CollectionList = () => {
  return (
    <section>
      <Container>
        <Row className="list_wrapper">
          {LIST_DATA.map((item, index) => (
            <Col key={index} className="mb-4">
              <div className="single_list_item">
                <span>
                  <i className={item.icon}></i>
                </span>
                <div className="list_item_content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CollectionList;