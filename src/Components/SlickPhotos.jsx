import SV1 from "../Imagens/SV1.jpg";
import SV2 from "../Imagens/SV2.jpg";
import SV3 from "../Imagens/SV3.jpg";
import SV4 from "../Imagens/SV4.jpg";
import "../Styls/SlickPhotos.css";

import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";

const items = [
  <img
    className="item"
    data-value="1"
    src={SV1}
    alt=""
    draggable="false"
  ></img>,
  <img
    className="item"
    data-value="2"
    src={SV2}
    alt=""
    draggable="false"
  ></img>,
  <img
    className="item"
    data-value="3"
    src={SV3}
    alt=""
    draggable="false"
  ></img>,
  <img
    className="item"
    data-value="4"
    src={SV4}
    alt=""
    draggable="false"
  ></img>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      className="thumb"
      onClick={() => {
        setThumbIndex(i);
        setThumbAnimation(true);
      }}
    >
      {item}
    </div>
  ));
};

const Carousel = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return [
    <div className="carouse">
      <h2>Construidos</h2>
      <AliceCarousel
        activeIndex={mainIndex}
        autoPlay={true}
        autoPlayInterval={5000}
        animationType="fadeout"
        animationDuration={800}
        disableDotsControls={true}
        disableButtonsControls={true}
        infinite={true}
        items={items}
        mouseTracking={!thumbAnimation}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnimation}
      />
      <div className="thumbs">
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth={true}
          autoHeight={true}
          disableDotsControls={false}
          disableButtonsControls={true}
          items={thumbs}
          mouseTracking={true}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
          infinite={true}
        />
        <div className="btn-prev" onClick={slidePrev}>
          &lang;
        </div>
        <div className="btn-next" onClick={slideNext}>
          &rang;
        </div>
      </div>
    </div>,
  ];
};

export default Carousel;
