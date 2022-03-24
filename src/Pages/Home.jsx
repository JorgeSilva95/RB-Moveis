import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../Components/MenuBar";
import SlickPhotos from "../Components/SlickPhotos.jsx";
import AvaService from "../Components/AvaService.jsx";
import Footer from "../Components/Footer.jsx";

function Home(props) {

    return (
        <div>
          <SlickPhotos />
          <AvaService />
        </div>
    );
  }

export default Home;
