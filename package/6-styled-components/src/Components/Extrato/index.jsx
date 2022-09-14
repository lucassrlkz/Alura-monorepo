import React from "react";
import { StyledBox, StyledButton } from "../Ui";
import { extratoLista } from "../../info.js";
import StyledItems from "../Items";

export const Extrato = () => {
  return (
    <StyledBox>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <StyledItems
            key={id}
            type={type}
            from={from}
            value={value}
            date={date}
          />
        );
      })}
      <StyledButton>ver mais</StyledButton>
    </StyledBox>
  );
};
