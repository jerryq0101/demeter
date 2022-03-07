import React from "react";
import styled from "styled-components";

export const Main = ({}) => {
  return (
    <TextAreaOnTheLeftRoot>
      <ProposalDescription>
        <SustainabilityNeedsMoneyAndTransparency>
          Sustainability needs money.
        </SustainabilityNeedsMoneyAndTransparency>
        <Group>
          <InvestingInSustainability>
            Lets Push
            <br />
            Sustainability{" "}
          </InvestingInSustainability>
          <GreenPeriod
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/d1f1338e-8557-4763-8fce-438db18d3221.svg?alt=media&token=51133e60-b740-4a92-b2e4-8983dd557a44"
            }
          />
        </Group>
        <DemeterDAOIsASustainabilityfocusedInvestmentDAOThatAllowsUsersInvestInEcofriendlyProjectsAndCharities>
          DemeterDAO is a sustainability-focused funding DAO, that makes
          partaking in recycling easy.
        </DemeterDAOIsASustainabilityfocusedInvestmentDAOThatAllowsUsersInvestInEcofriendlyProjectsAndCharities>
      </ProposalDescription>
      <ButtonDescription>
        <Group1>
          <FundProposals>Fund Proposals</FundProposals>
          <HowItWorksLink>
            <HowItWorks>How it works</HowItWorks>
            <Line2
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7783f459-cb27-42d5-a63c-02a97ef5dfd4.svg?alt=media&token=631509f0-b457-4b76-a678-e57fb053d77d"
              }
            />
          </HowItWorksLink>
        </Group1>
        <TwoStepDescription alignItems={"stretch"}>
          <Group34>
            <NumberCircleOne
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/b7c4888b-2ad3-43b6-8f20-fcb61b61484b.svg?alt=media&token=ed74459d-ecb2-473b-8327-b084854fb44e"
              }
            />
            <InvestInProjects width={"271px"}>
              Give to treasury
            </InvestInProjects>
          </Group34>
          <TwoStepDescription alignItems={"flex-end"}>
            <NumberCircleOne
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/8a34929c-eed9-4c44-8068-26cdda0cf24b.svg?alt=media&token=e676cd67-0214-4b21-8934-5c0ea68f1b0e"
              }
            />
            <InvestInProjects width={"291px"}>
              Decide who to fund
            </InvestInProjects>
          </TwoStepDescription>
        </TwoStepDescription>
      </ButtonDescription>
    </TextAreaOnTheLeftRoot>
  );
};
const TwoStepDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: ${(props) => props.alignItems};
`;
const NumberCircleOne = styled.img`
  width: 32px;
  height: 32px;
  align-self: stretch;
`;
const InvestInProjects = styled.div`
  height: 25px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 500;
  margin-bottom: 3px;
  width: ${(props) => props.width};
`;

// The big css

const TextAreaOnTheLeftRoot = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin: 0;
  // background-color: aliceblue;
  min-width: 650px;
  align-items: flex-start;
  padding: 10% 0 5% 5%;
`;
const ProposalDescription = styled.div`
  height: 322px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SustainabilityNeedsMoneyAndTransparency = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 0.54px;
  margin-bottom: auto;
`;
const Group = styled.div`
  align-self: stretch;
  height: 185px;
  margin-bottom: 16px;
  width: 579px;
  position: relative;
`;
const InvestingInSustainability = styled.div`
  width: 579px;
  height: 185px;
  font-size: 75px;
  font-family: Inter;
  font-weight: 700;
  position: absolute;
  white-space: pre-wrap;
`;
const GreenPeriod = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 158px;
  left: 505px;
`;
const DemeterDAOIsASustainabilityfocusedInvestmentDAOThatAllowsUsersInvestInEcofriendlyProjectsAndCharities = styled.div`
  width: 469px;
  height: 80px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
`;
const ButtonDescription = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  gap: 19px;
`;
const Group1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 69px;
  align-items: flex-end;
`;
const FundProposals = styled.div`
  color: #ffffff;
  display: flex;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  align-self: stretch;
  background-color: #219f94;
  width: 251px;
  height: 29px;
  flex-direction: row;
  justify-content: center;
  padding-top: 19px;
  padding-bottom: 18px;
  border-radius: 8px;
`;
const HowItWorksLink = styled.div`
  width: 151px;
  height: 31px;
  margin-bottom: 16px;
  position: relative;
`;
const HowItWorks = styled.div`
  color: #219f94;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  position: absolute;
`;
const Line2 = styled.img`
  width: 151px;
  height: 2px;
  position: absolute;
  top: 30px;
  left: -1px;
`;
const Group34 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-end;
`;
