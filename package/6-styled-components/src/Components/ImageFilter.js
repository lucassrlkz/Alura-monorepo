import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { IconTheme } from "./Ui";

export default (type) => {
  const Images = {
    Restaurante: <IconTheme src={alimentacao} alt="Restaurante"></IconTheme>,
    Utilidades: <IconTheme src={utilidades} alt="Utilidades"></IconTheme>,
    Saude: <IconTheme src={saude} alt="Saude"></IconTheme>,
    Transporte: <IconTheme src={transporte} alt="Transporte"></IconTheme>,
    default: <IconTheme src={outros} alt="Outros"></IconTheme>,
  };

  return Images[type] || Images.default;
};
