import React from "react";
import styled from "styled-components";
import StyledItem from "../item";
import ImageFilter from "../ImageFilter";

const StyledItems = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => {
  return (
    <StyledItems>
      {ImageFilter(props.type)}
      <StyledItem {...props} />
      <span>{props.date}</span>
    </StyledItems>
  );
};
