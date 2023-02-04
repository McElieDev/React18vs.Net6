import React, { useState } from "react";
import "./style.css";
import { Heading } from "../../globalStyles";
import { AiOutlineClose } from "react-icons/ai";

import {
  GallerySection,
  GalleryWrapper,
  GalleryContainer,
} from "./GalleryStyle";

//Display Machines
import ImgMachines1 from "./../../img/machines/carltondigitalprinting-machines-1.png";
import ImgMachines2 from "./../../img/machines/carltondigitalprinting-machines-2.png";
import ImgMachines3 from "./../../img/machines/carltondigitalprinting-machines-3.png";

//Displays services
import ImgServices1 from "./../../img/thecollection/all-printing-available-carlton-digital-printing.png";
import ImgServices2 from "./../../img/thecollection/carlton-digital-printing-thumb-present-pg.png";
import ImgServices3 from "./../../img/thecollection/daddygirlbirthday-carlton-digital-printing.png";
import ImgServices4 from "./../../img/thecollection/drilling-print-carlton-digital-printing-thumb-present-pg.png";
import ImgServices5 from "./../../img/thecollection/kingbirthday_t-shirt--carlton-digital-printing.png";
import ImgServices6 from "./../../img/thecollection/label-print-carlton-digital-printing.png";
import ImgServices7 from "./../../img/thecollection/multiple_collection_printable-carlton-digital-printing.png";
import ImgServices8 from "./../../img/thecollection/pjamas1-carlton-digital-printing.png";
import ImgServices9 from "./../../img/thecollection/pjamas2-mag-carlton-digital-printing.png";
import ImgServices10 from "./../../img/thecollection/july-girl-carlton-digital-printing.png";
import ImgServices11 from "./../../img/thecollection/queenbirthday_t-shirt--carlton-digital-printing.png";

// Displays Videos
//import ImgVideos1 from "./../../img/event-digital-print-carlton-printing-labels-services.mp4";
//import ImgVideos2 from "./../../img/large-format-printing- carlton-printing-labels-services.mp4";
//import ImgVideos3 from "./../../img/wall-digital-printing- carlton-printing-labels-services.mp4";
import { Container, Row } from "react-bootstrap";

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

const Gallery = () => {
  const dataMachines = [
    {
      id: 1,
      imgSrc: ImgMachines1,
      detail: "New Digital Printing Machines",
    },
    {
      id: 2,
      imgSrc: ImgMachines2,
      detail: "New Labels Printing Machines",
    },
    {
      id: 3,
      imgSrc: ImgMachines3,
      detail: "New Banners Printing Machines",
    },
  ];

  const dataServices = [
    {
      id: 1,
      imgSrc: ImgServices1,
    },
    {
      id: 2,
      imgSrc: ImgServices2,
    },
    {
      id: 3,
      imgSrc: ImgServices3,
    },
    {
      id: 4,
      imgSrc: ImgServices4,
    },
    {
      id: 5,
      imgSrc: ImgServices5,
    },
    {
      id: 6,
      imgSrc: ImgServices6,
    },
    {
      id: 7,
      imgSrc: ImgServices7,
    },
    {
      id: 8,
      imgSrc: ImgServices8,
    },
    {
      id: 9,
      imgSrc: ImgServices9,
    },
    {
      id: 10,
      imgSrc: ImgServices10,
    },
    {
      id: 11,
      imgSrc: ImgServices11,
    },
  ];

  // const dataVideos = [
  //   {
  //     id: 1,
  //     imgSrc: ImgVideos1,
  //   },
  //   {
  //     id: 2,
  //     imgSrc: ImgVideos2,
  //   },
  //   {
  //     id: 3,
  //     imgSrc: ImgVideos3,
  //   },
  // ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    //console.warn(imgSrc); check result on console
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  //return <>{console.warn(dataMachines, dataServices, dataVideos)}</>;

  return (
    <>
      <GallerySection title="Carlton Digital Printing Gallery" id="gallery">
        <GalleryWrapper>
          <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} alt=" " />
            <span onClick={() => setModel(false)}>
              {iconStyle(AiOutlineClose)}
            </span>
          </div>
          <Heading>Gallery</Heading>
          <GalleryContainer>
            <div className="gallery-container">
              {dataMachines.map((item, index) => {
                return (
                  <Container>
                    <Row>
                      <div
                        className="pics-gallery"
                        key={index}
                        onClick={() => getImg(item.imgSrc)}
                      >
                        <img
                          src={item.imgSrc}
                          alt={item.detail}
                          style={{ width: "100%" }}
                        />
                      </div>
                    </Row>
                  </Container>
                );
              })}
            </div>
            <div className="gallery-container">
              {dataServices.map((item, index) => {
                return (
                  <Container>
                    <Row>
                      <div
                        className="pics-gallery"
                        key={index}
                        onClick={() => getImg(item.imgSrc)}
                      >
                        <img
                          src={item.imgSrc}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </Row>
                  </Container>
                );
              })}
            </div>
            {/* <div className="gallery-container">
              {dataVideos.map((item, index) => {
                return (
                  <Container>
                    <Row>
                      <div
                        className="pics-gallery"
                        key={index}
                        onClick={() => getImg(item.imgSrc)}
                      >
                        <img
                          src={item.imgSrc}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </Row>
                  </Container>
                );
              })}
            </div> */}
          </GalleryContainer>
        </GalleryWrapper>
      </GallerySection>
    </>
  );
};

export default Gallery;
