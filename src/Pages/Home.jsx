import React, { useState } from "react";
import MenuBar from "../Components/MenuBar";
import SlickPhotos from "../Components/SlickPhotos.jsx";
import AvaService from "../Components/AvaService.jsx";
import Footer from "../Components/Footer.jsx";

function Home(props) {

    return (
        <div>
          <MenuBar idScreen="Login"></MenuBar>
          <SlickPhotos />
          <AvaService />
          <Footer />
        </div>
    );
  }

export default Home;
