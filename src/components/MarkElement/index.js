import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { BsBookmarkStarFill } from "react-icons/bs";
// import { MangaDataLocal } from "../../assets/data/MangaData";
import MangaSection from "../MangaSection";
import "./MarkElement.scss";

function MarkElement() {

  const [mangaData, setMangaData] = useState([])

  useEffect(() => {
    async function fetchData() {

      try {
        const requestUrl = "http://localhost:5000/data/manga";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log( responseJSON );
  
        const data  = responseJSON;

        setMangaData(data);
      } catch (error) {
        console.log(error);
      }
    }


    fetchData();
  },[])

  return (
    <Container style={{ marginTop: "10px" }}>
      <Row>
        <Col className="text-center shadowed bordered">
          <div style={{ fontSize: "22px", marginTop: "5px" }}>
            <BsBookmarkStarFill /> TRUYỆN MỚI CẬP NHẬT
          </div>
        </Col>
        <Col xxl="6">
          <Carousel className="shadowed bordered">
            <Carousel.Item>
              <img
                className="d-block w-100 bordered"
                src="https://picsum.photos/400/200"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bordered"
                src="https://picsum.photos/400/200"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bordered"
                src="https://picsum.photos/400/200"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="text-center shadowed bordered">
          <div style={{ fontSize: "22px", marginTop: "5px" }}>
            <BsBookmarkStarFill /> TRUYỆN HOT
          </div>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#dc3545",
          height: "35px",
          margin: "10px 0px",
        }}
      />
      <Row>
        <MangaSection Data={mangaData} />
        {/* <MangaSection Data={MangaDataLocal}/> */}
      </Row>
    </Container>
  );
}

export default MarkElement;
