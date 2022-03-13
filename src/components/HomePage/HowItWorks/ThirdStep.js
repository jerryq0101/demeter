import React from "react";
import styled from "styled-components";
export const ThirdStep = ({}) => {
  return (
    <DonationInitBlockRoot>
      <SendStablecoin>
        <Element2>
          <SpringGreenRectangle />
          <Text1>Donation Initiation</Text1>
        </Element2>
        <Text2>3</Text2>
      </SendStablecoin>
      <Paragraph>
        Through a smart contract transaction of the vote, we deposit the
        accumulated treasury funds into the wallet of voted facility.{" "}
      </Paragraph>
    </DonationInitBlockRoot>
  );
};
const DonationInitBlockRoot = styled.div`
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
const SpringGreenRectangle = styled.div`
  background-color: rgba(242, 245, 200, 0.2);
  width: 191px;
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
  white-space: pre-wrap;
`;
