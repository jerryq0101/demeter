import { StrictMode } from "react";
import ReactDOM from "react-dom";

import WebFont from "webfontloader";
import App from "./App";
import {ThirdwebWeb3provider} from '@3rdweb/hooks';



WebFont.load({
    google: {
        families: ['Poppins', "Inter:600,400"]
    }
  });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);