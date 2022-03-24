import * as React from "react";
import { Link, Outlet } from "react-router-dom/";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Lik from "@mui/material/Link";
import Logo from "../Imagens/Logo.png";
import "../Styls/MenuBar.css";

window.onscroll = function () {
  scrollFunc();
};

function scrollFunc() {
  const headerTran = document.getElementById("cabssalh");

  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    headerTran.style.background = "rgba(66,139,131,70%)";
  } else if (document.documentElement.scrollTop < 10) {
    headerTran.style.background = "rgba(66,139,131,70%)";
  } else {
    headerTran.style.transition = "0.90s";
    headerTran.style.background = "rgba(66,139,131,30%)";
  }
}

function MenuBar(props) {
  const { idScreen } = props;

  return (
    <>
      <div className="cabsAlho">
        <AppBar
          id="cabssalh"
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <img className="Logo" src={Logo} alt="Logo" />
            </Typography>
            <nav>
              <Lik
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
              >
                <Link to="/">Home</Link>
              </Lik>
              <Lik
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
              >
                <Link to="/servicos">Serviços</Link>
              </Lik>
              <Lik
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                onClick={() => {
                  console.log(idScreen);
                }}
              >
                Sobre
              </Lik>
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
      <Outlet/>
    </>
  );
}

export default MenuBar;
