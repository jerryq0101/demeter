import React from "react";
import styled from "styled-components";
export const Footer = ({}) => {
  return (
    <FooterRoot>
      <FlexRow>
        <Text1>Resources</Text1>
        <Text2 marginBottom={"22px"}>Home</Text2>
        <Text2 marginBottom={"22px"}>Vote</Text2>
        <Text2 marginBottom={"22px"}>Treasury</Text2>
        <Text2 marginBottom={"0px"}>Docs</Text2>
      </FlexRow>
      <Aboutus>
        <Text1>About us</Text1>
        <Text2 marginBottom={"22px"}>Mission</Text2>
        <Text2 marginBottom={"22px"}>Contact us</Text2>
        <Text2 marginBottom={"0px"}>Partners</Text2>
      </Aboutus>
      <DemeterDAOMotto
        src={"https://file.rendit.io/n/hCDRYLJBgUEa7UC3uRFL.svg"}
      />
    </FooterRoot>
  );
};
const Text1 = styled.div`
  color: #ffffff;
  width: 266px;
  height: 33px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  margin-bottom: 18px;
  align-self: stretch;
`;
const Text2 = styled.div`
  color: #ffffff;
  width: 193px;
  height: 22px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  margin-bottom: ${(props) => props.marginBottom};
`;
const FooterRoot = styled.div`
  background-color: #808080;
  height: 258px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 31px;
  padding-right: 31px;
  padding-top: 80px;
  padding-bottom: 34px;
  margin: 30em 0 0 0;
  min-width: 1749px;
  align-items: flex-start;
  border: 0;
`;
const FlexRow = styled.div`
  height: 205px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5%;
`;
const Aboutus = styled.div`
  height: 161px;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DemeterDAOMotto = styled.img`
  width: 52px;
  height: 53px;
  align-self: flex-end; 
`;
