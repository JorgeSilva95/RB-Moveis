import React, {useState} from "react";
import MenuBar from "../Components/MenuBar";
import SlickPhotos from "../Components/SlickPhotos.jsx";
import AvaService from "../Components/AvaService.jsx";
import Footer from "../Components/Footer.jsx";

function Home(props) {
  
  const [Page, SetPage] = useState("Home");
  

  if (Page === "Home") {
    return (
      <div>
        <body>
          <MenuBar idScreen="Login" ></MenuBar>
          <SlickPhotos />
          <AvaService/>
          <Footer/>
        </body>
        
      </div>
    );
  } else if (Page === "Servicos") {
    return <div>asdkjasoijd</div>;
  }
}

export default Home;
