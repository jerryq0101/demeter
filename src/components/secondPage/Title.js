import React from "react";
import styled from "styled-components";
export const Pagetwotitle = ({}) => {
  return (
    <FrameRoot>
      <Image1
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/92f62c93-9d3f-4048-977e-56e1bdadcc6c.svg?alt=media&token=cfff244a-a801-4a63-98d8-677de45f0416"
        }
      />
      <HowItWorksTitle>
        <Text1>How it works</Text1>
        <GreenPeriod
          src={
            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/4d42dee9-0aa5-4e4c-8b82-72c7ae0b91bb.svg?alt=media&token=3a8988c6-1a59-4dc7-b3e7-feb4b1dfd689"
          }
        />
      </HowItWorksTitle>
    </FrameRoot>
  );
};


const FrameRoot = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 366px;
  padding-left: 220px;
  padding-right: 220px;
  padding-top: 196px;
  padding-bottom: 18px;
  margin: auto;
  margin-left: 40%
  min-width: 1371px;
  align-items: flex-start;
`;
const Image1 = styled.img`
  width: 67px;
  height: 53px;
`;
const HowItWorksTitle = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  gap: 9px;
  align-items: flex-end;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 80px;
  font-family: Inter;
  font-weight: 700;
  align-self: stretch;
`;
const GreenPeriod = styled.img`
  width: 12px;
  height: 12px;
  margin-bottom: 13px;
`;
