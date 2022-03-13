import React from "react";
import styled from "styled-components";
export const DownArrow = ({}) => {
  return (
    <GoDownButtonRoot>
      <Ellipse9
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/ee95206e-8cda-4ab7-b958-46d75a8602da.svg?alt=media&token=6c90c0db-b6bd-4d3b-a2f9-5d1d068e20cd"
        }
      />
      <Union
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/105c742b-acf3-4231-bb8c-902f7026079f.svg?alt=media&token=ff8929db-79df-4442-929d-da3ebbd48620"
        }
      />
    </GoDownButtonRoot>
  );
};
const GoDownButtonRoot = styled.div`
  width: 53px;
  height: 53px;
  position: relative;
  margin-right: auto;
  margin-left: 5%;
`;

const Ellipse9 = styled.img`
  width: 53px;
  height: 53px;
  position: absolute;
`;
const Union = styled.img`
  width: 14.58px;
  height: 22.81px;
  position: absolute;
  top: 15.81px;
  left: 18.65px;
`;
