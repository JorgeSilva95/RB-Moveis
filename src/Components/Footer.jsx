import "../Styls/Footer.css";
import Logo from"../Imagens/Logo.png"

function Footer() {
  return (
    <footer>
      <div>
          <img className="Logo" src={Logo} alt="RB-Moveis Planejados" />
          <ul className="SocialMedia">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
      </div>
      <div className="Direitos">
        <h3>Todos os direitos reservados.</h3>
      </div>
    </footer>
  );
}

export default Footer;
