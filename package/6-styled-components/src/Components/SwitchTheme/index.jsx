import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../Ui";

const white = <Icone src={themeOn} alt="Tema claro" />;
const dark = <Icone src={themeOff} alt="Tema escuro" />;

export default ({ theme }) => (theme ? dark : white);
