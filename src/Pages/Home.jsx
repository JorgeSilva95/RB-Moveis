import React, {useState} from "react";
import MenuBar from "../Components/MenuBar";
import SlickPhotos from "../Components/SlickPhotos.jsx";
import AvaService from "../Components/AvaService.jsx";
import Footer from "../Components/Footer.jsx";

function Home(props) {
  
  console.log("asd");
  const [Page, SetPage] = useState("Home");
  

  if (Page === "Home") {
    return (
      <div>
        <body>
          <MenuBar idScreen="Login" ></MenuBar>
          <SlickPhotos />
          <AvaService/>
          <Footer/>
          <button onClick={()=>(props.setttt())}>BUTTAO DEBUG</button>
        </body>
        
      </div>
    );
  } else if (Page === "Servicos") {
    return <div>asdkjasoijd</div>;
  }
}

export default Home;
