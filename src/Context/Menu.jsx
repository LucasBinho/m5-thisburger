import { listCardapio } from "../services/Request";
import ifsalada from "../assets/if-salada.png";
import backbacon from "../assets/back-bacon.png";
import elsetudo from "../assets/else-tudo.png";
import xbug from "../assets/x-bug.png";
import frontegg from "../assets/front-egg.png";

const images = [xbug, backbacon, frontegg, ifsalada, elsetudo];

const cardapio = await listCardapio();


cardapio.map((element, index) => {
  element.image = images[index];
  element.qty = 0;
}
);

export default cardapio;