import React from "react";
import styled from "styled-components";
export const FirstStep = ({}) => {
  return (
    <SendBlockRoot>
      <SendStablecoin>
        <Element2>
          <PineGreenRectangle />
          <Text1>Send in stablecoin</Text1>
        </Element2>
        <Text2>1</Text2>
      </SendStablecoin>
      <Paragraph>
        Send in stablecoin to be stored in the DAO treasury. Every 2 month
        period the DAO will initiate a vote deciding where the money goes to.
      </Paragraph>
    </SendBlockRoot>
  );
};
const SendBlockRoot = styled.div`
  width: 441px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin: auto;
  align-items: flex-start;
`;
const SendStablecoin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const Element2 = styled.div`
  align-self: stretch;
  width: 370px;
  height: 58px;
  position: relative;
`;
const PineGreenRectangle = styled.div`
  background-color: rgba(33, 159, 148, 0.2);
  width: 116px;
  height: 58px;
  position: absolute;
`;
const Text1 = styled.div`
  font-size: 40px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  top: 5px;
  left: 10px;
`;
const Text2 = styled.div`
  color: #219f94;
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
`;
const Paragraph = styled.div`
  width: 441px;
  height: 125px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  align-self: stretch;
`;
