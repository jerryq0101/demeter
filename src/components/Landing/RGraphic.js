import React from "react";
import styled from "styled-components";
export const Graphic = ({}) => {
  return (
    <UIOnTheRightRoot>
      <UIDecoration
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/ecf769c7-b44c-49c2-8d5a-3838007ac33b.svg?alt=media&token=a020f8c7-3d68-49ff-a226-653ea442c04b"
        }
      />
      <WhiteFlexRow>
        <FreeGeekLogo
          src={
            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/197a907b-4f87-4227-a10c-8ed17e7d7d5f.png?alt=media&token=6953fec7-fe5f-4fdd-b6ac-ce7ce4031704"
          }
        />
        <FlexColumn>
          <Text1>FreeGeek Vancouver</Text1>
          <FlexRow>
            <Text2>151,070 Votes</Text2>
            <SilverRectangle />
          </FlexRow>
        </FlexColumn>
      </WhiteFlexRow>
      <Element1>
        <WhiteFlexRow1>
          <Image1
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/246c1bd3-308f-4cdc-8133-538f7984376b.png?alt=media&token=f8d41ba4-1ce5-44de-bebb-e2ff19cf25f5"
            }
          />
          <Element2>
            <Text3>
              
            </Text3>
            <SilverRectangle1 />
          </Element2>
          <FlexColumn1>
            <Text4>Funded</Text4>
            <Line
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/1341cb22-45b5-4801-a227-81241c86ffd7.svg?alt=media&token=61c16752-5dc0-4880-b7d6-0c5c42832f9b"
              }
            />
          </FlexColumn1>
        </WhiteFlexRow1>
        <Image3
          src={
            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/45052fb6-5866-4e55-942f-e24eaaafebb8.svg?alt=media&token=45a5c4fc-141c-4ba9-89b2-24820ebcf99e"
          }
        />
        <Image4
          src={
            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/ad818edd-2e7a-4e4b-8180-194055f83663.svg?alt=media&token=68f9af4c-eb05-42a8-9011-f5919ed84fb1"
          }
        />
      </Element1>
      <WhiteFlexColumn>
        <FlexRow1>
          <Image2
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/3e47f974-bc3d-42ba-9ba4-612b5e85a855.png?alt=media&token=6f82fae3-83ff-4b53-8a69-a33167d61b64"
            }
          />
          <Text5>Vancouver</Text5>
        </FlexRow1>
        <FlexRow2 marginBottom={"19px"}>
          <Ellipse
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/13e81bcc-2887-4637-af0e-280d75a45356.svg?alt=media&token=d52fabd0-2171-40d1-ab9c-37d2062340f6"
            }
          />
          <Text6 height={"15px"}>Electronics Depot</Text6>
        </FlexRow2>
        <FlexRow2 marginBottom={"8px"}>
          <Ellipse1
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/dff2bafb-f18d-42fe-bb25-9cc0d18896ec.svg?alt=media&token=ea469ced-0ec2-47a9-8dc8-459c7a406138"
            }
          />
          <Text6 height={"18px"}>Regional Recycling</Text6>
        </FlexRow2>
        <SilverRectangle2 />
      </WhiteFlexColumn>
    </UIOnTheRightRoot>
  );
};
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: ${(props) => props.marginBottom};
`;
const Text6 = styled.div`
  width: 124px;
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  align-self: stretch;
  height: ${(props) => props.height};
`;
const UIOnTheRightRoot = styled.div`
  height: 806px;
  position: relative;
  margin: auto;
  min-width: 971px;
`;
const UIDecoration = styled.img`
  width: 784px;
  height: 670px;
  position: absolute;
  top: 28px;
  left: 138px;
`;
const WhiteFlexRow = styled.div`
  box-shadow: 6px 1px 70px 4px rgba(0, 0, 0, 0.15);
  width: 264px;
  background-color: #ffffff;
  position: absolute;
  top: 109px;
  left: 674px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 14px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 26px;
  padding-bottom: 25px;
  border-radius: 10px;
`;
const FreeGeekLogo = styled.img`
  width: 42px;
  height: 41px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
`;
const Text1 = styled.div`
  width: 192px;
  height: 21px;
  font-size: 15px;
  font-family: Inter;
  font-weight: 600;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 9px;
  align-items: flex-end;
`;
const Text2 = styled.div`
  width: 94px;
  height: 14px;
  font-size: 12px;
  font-family: Inter;
  font-weight: 400;
  align-self: stretch;
`;
const SilverRectangle = styled.div`
  width: 81px;
  height: 11px;
  background-color: rgba(196, 196, 196, 0.97);
  border-radius: 9.5px;
`;
const Element1 = styled.div`
  width: 427px;
  height: 151px;
  position: absolute;
  top: 619.42px;
  left: 544px;
`;
const WhiteFlexRow1 = styled.div`
  box-shadow: 6px 1px 70px 4px rgba(0, 0, 0, 0.2);
  width: 346px;
  background-color: #ffffff;
  position: absolute;
  top: 15.58px;
  left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: 10px;
`;
const Image1 = styled.img`
  width: 58px;
  height: 58px;
  margin-right: 17px;
`;
const Element2 = styled.div`
  width: 155px;
  margin-right: 10px;
  height: 58px;
  position: relative;
`;
const Text3 = styled.div`
  width: 155px;
  height: 30px;
  font-size: 25px;
  font-family: Inter;
  font-weight: 500;
  position: absolute;
  top: 16px;
  white-space: pre-wrap;
`;
const SilverRectangle1 = styled.div`
  width: 81px;
  height: 29px;
  background-color: rgba(196, 196, 196, 0.97);
  position: absolute;
  top: 17px;
  left: 4px;
  border-radius: 9.5px;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 3px;
  padding-top: 7px;
  padding-bottom: 7px;
  align-items: flex-start;
`;
const Text4 = styled.div`
  font-size: 25px;
  font-family: Inter;
  font-weight: 600;
  align-self: stretch;
`;
const Line = styled.img`
  width: 88px;
  height: 2px;
`;
const Image3 = styled.img`
  width: 25.72px;
  height: 34.94px;
  position: absolute;
  top: 115.58px;
`;
const Image4 = styled.img`
  width: 17px;
  height: 23.6px;
  position: absolute;
  left: 410px;
`;
const WhiteFlexColumn = styled.div`
  box-shadow: 6px 1px 70px 4px rgba(0, 0, 0, 0.1);
  height: 172px;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 40px;
  padding-right: 41px;
  border-radius: 10px;
`;
const FlexRow1 = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  align-items: flex-end;
`;
const Image2 = styled.img`
  width: 49px;
  height: 49px;
  align-self: stretch;
`;
const Text5 = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  margin-bottom: 3px;
`;
const Ellipse = styled.img`
  width: 10px;
  height: 10px;
  margin-top: 2px;
`;
const Ellipse1 = styled.img`
  width: 10px;
  height: 10px;
  margin-top: 3px;
`;
const SilverRectangle2 = styled.div`
  width: 81px;
  height: 10px;
  background-color: rgba(196, 196, 196, 0.97);
  margin-left: 34px;
  align-self: flex-start;
  border-radius: 9.5px;
`;
