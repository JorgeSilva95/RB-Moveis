import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "../Styls/AvServ.css";
import cardsDB from "../DB/cardsDB.json";

export default function RecipeReviewCard(props) {
const testHomProps = props;

  const infCard1 = cardsDB.cards.card1;
  const infCard2 = cardsDB.cards.card2;
  const infCard3 = cardsDB.cards.card3;
  const infCard4 = cardsDB.cards.card4;

  return (
    <div>
      <h2 className="titleAvaliac">Avaliações</h2>
      <div className="AvServ">
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={infCard1.ftPerfil}
              >{infCard1.nome.substring(0,1)}</Avatar>
            }
            title={infCard1.nome}
            subheader={infCard1.data}
          />
          <CardMedia
            component="img"
            height="120"
            image={infCard1.ftServico}
            alt="Montagem de Movel"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {infCard1.comentServ}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={infCard2.ftPerfil}
              >{infCard2.nome.substring(0,1)}</Avatar>
            }
            title={infCard2.nome}
            subheader={infCard2.data}
          />
          <CardMedia
            component="img"
            height="120"
            image={infCard2.ftServico}
            alt="Montagem de Movel"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {infCard2.comentServ}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={infCard3.ftPerfil}
              >{infCard3.nome.substring(0,1)}</Avatar>
            }
            title={infCard3.nome}
            subheader={infCard3.data}
          />
          <CardMedia
            component="img"
            height="120"
            image={infCard3.ftServico}
            alt="Montagem de Movel"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {infCard3.comentServ}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={infCard4.ftPerfil}
              >{infCard4.nome.substring(0,1)}</Avatar>
            }
            title={infCard4.nome}
            subheader={infCard4.data}
          />
          <CardMedia
            component="img"
            height="120"
            image={infCard4.ftServico}
            alt="Montagem de Movel"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {infCard4.comentServ}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
