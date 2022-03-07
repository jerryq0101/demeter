import React from "react";
import styled from "styled-components";
export const SecondStep = ({}) => {
  return (
    <VoteBLockRoot>
      <SendStablecoin>
        <Element2>
          <SpringGreenRectangle />
          <Text1>Vote for where</Text1>
        </Element2>
        <Text2>2</Text2>
      </SendStablecoin>
      <Paragraph>
        You’ve deposited donation into the treasury, now you have a say on which
        facility we support. Vote before the 5 day voting period ends.{" "}
      </Paragraph>
    </VoteBLockRoot>
  );
};
const VoteBLockRoot = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin: auto;
  align-items: flex-start;
`;
const SendStablecoin = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: flex-end;
`;
const Element2 = styled.div`
  align-self: stretch;
  width: 298px;
  height: 58px;
  position: relative;
`;
const SpringGreenRectangle = styled.div`
  background-color: rgba(193, 222, 174, 0.2);
  width: 105px;
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
  align-self: flex-end;
  white-space: pre-wrap;
`;
