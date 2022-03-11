import React from "react";
import styled from "styled-components";
import { Link} from 'react-router-dom'
import {Connect} from './Connect.js';

import './id.css'

export default function Navigation() {
  return (
    <div>
      <header>
        <Link to="/">
        <div class="logo">
            <img class="logoimg" src= "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/396b926f-25f3-42ab-8003-d3ce1e266bc6.svg?alt=media&token=f8cc9184-677a-44ce-9cc9-489d3f10693a" alt="logo" />
        </div>
        </Link>
         <nav>
             <ul class="nav_links">
                 <Link to="/vote"><li><a href="#">Vote</a></li></Link>
                 <li><a href="#">Treasury</a></li>
                 <li><a href="#">Docs</a></li>
             </ul>
         </nav>
         <a class="cta"><Connect /></a>
      </header>
    </div>
  )
}


// export const Navigation = ({}) => {
//   return (
//     <Frame2Root>
//       <DemeterDAOMotto>
//         <Logo
//           src={
//             "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/396b926f-25f3-42ab-8003-d3ce1e266bc6.svg?alt=media&token=f8cc9184-677a-44ce-9cc9-489d3f10693a"
//           }
//         />
//         <DemeterDAO>DemeterDAO</DemeterDAO>
        
//       </DemeterDAOMotto>
//       <WebsitePageSelect>
//         <Group width={"54px"}>
//           <Link to="/vote"><Vote left={"0px"}>Vote</Vote></Link>
//           <Link to="/"><Vote left={"-124px"}>Home</Vote></Link>
//           <Ellipse8
//             src={
//               "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/d9403416-7cdd-4047-aa97-5f4043c275b2.svg?alt=media&token=22b7f968-ed2c-4114-88c5-d3290ed90d68"
//             }
//           />
//         </Group>
//         <Group width={"102px"}>
//           <Vote left={"0px"}>Treasury</Vote>
//           <a target="_blank" href="https://demeterdao.notion.site/How-Demeter-Works-e3e041a17d354c6f8e57351363ccb419"><Vote left={"157px"}>Docs</Vote></a>
//         </Group>
//       </WebsitePageSelect>
//       {/* <SignIn>Sign in</SignIn> */}
//       <SignUp>
//         <Connect />
//       </SignUp>
//     </Frame2Root>
//   );
// };

// const Group = styled.div`
//   height: 37px;
//   position: relative;
//   width: ${(props) => props.width};
// `;
// const Vote = styled.div`
//   color: rgba(0, 0, 0, 0.7);
//   font-size: 24px;
//   font-family: Inter;
//   font-weight: 400;
//   position: absolute;
//   top: -8px;
//   left: ${(props) => props.left};
// `;
// const Frame2Root = styled.div`
//   width: auto;
//   height: auto;
//   display: flex;
//   flex-direction: row;
//   margin: 3% 0 0 0;
//   justify-content: center;
//   align-items: flex-end;
// `;
// const DemeterDAOMotto = styled.div`
//   width: 25%
//   padding-left: 5%;
//   display: flex;
//   align-self: flex-start;
  
//   margin-right: 10%;
// `;
// const DemeterDAO = styled.div`
//   font-size: 30px;
//   font-family: Inter;
//   font-weight: 600;
//   padding: 10px 0 10px 15px;
// `;
// const Logo = styled.img`
//   width: 52px;
//   height: 53px;
// `;
// const WebsitePageSelect = styled.div`
//   width: 338px;
//   margin-left: auto;
//   margin-right: auto;
//   display: flex;
//   flex-direction: row;
//   gap: 55px;
// `;
// const Ellipse8 = styled.img`
//   width: 7px;
//   height: 7px;
//   position: absolute;
//   top: 30px;
//   left: -93px;
// `;
// const SignIn = styled.div`
//   font-size: 24px;
//   font-family: Inter;
//   font-weight: 600;
//   padding: 14px 50px 14px 50px;
//   margin-right: 2em;
// `;
// const SignUp = styled.div`
//   color: 0;
//   display: flex;
//   font-size: 24px;
//   font-family: Inter;
//   font-weight: 600;
//   // background-color: #219f94;
  
//   flex-direction: row;
//   justify-content: center;
//   padding: 14px 50px 14px 2%;
//   border-radius: 8px;
//   margin-right: 5%;
// `;
