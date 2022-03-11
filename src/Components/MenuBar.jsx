import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Logo from "../Imagens/Logo.png";
import "../Styls/MenuBar.css";

function MenuBar(props) {
  const { idScreen } = props;
  const { setScreen } = props;
  function setttt() {
    props.setScreen="aeecaralhoooo";
    console.log(setScreen);
  }
  return (
    <div className="cabsAlho">
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <img className="Logo" src={Logo} alt="Logo"/>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Serviços
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              onClick={() => {
                console.log(idScreen);
              }}
            >
              Sobre
            </Link>
          </nav>
          <Button
            onClick={() => {
              console.log(idScreen);
            }}
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;
