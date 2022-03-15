import "../Styls/Footer.css";
import Logo from"../Imagens/Logo.png"
import Facebook from "../Imagens/Facebook.png"
import Instagram from "../Imagens/Instagram.png"
import Whatsapp from "../Imagens/Whatsapp.png"
import Youtube from "../Imagens/Youtube.png"

function Footer() {
  return (
    <footer>
      <div>
          <img className="Logo" src={Logo} alt="RB-Moveis Planejados" />
          <ul className="SocialMedia">
            <li><a href="#"><img className="Icons" src={Facebook} alt="Facebook"></img></a></li>
            <li><a href="#"><img className="Icons" src={Instagram} alt="Instagram"></img></a></li>
            <li><a href="#"><img className="Icons" src={Whatsapp} alt="WhatsApp"></img></a></li>
            <li><a href="#"><img className="Icons" src={Youtube} alt="Youtube"></img></a></li>
          </ul>
      </div>
      <div className="Direitos">
        <h3>Todos os direitos reservados.</h3>
      </div>
    </footer>
  );
}

export default Footer;
