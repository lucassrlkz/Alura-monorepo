import React, { useState } from "react";
import styled from "styled-components";
import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import {
  Icone,
  StyledBox,
  StyledButton,
  StyledDetail,
  StyledSaldo,
  IconTheme,
} from "../Ui";

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <StyledBox>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconTheme src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <StyledSaldo>
            <StyledDetail>R$</StyledDetail> 0,00{" "}
          </StyledSaldo>
        ) : null}
      </div>

      <StyledButton onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </StyledButton>
    </StyledBox>
  );
};

export default Conta;
