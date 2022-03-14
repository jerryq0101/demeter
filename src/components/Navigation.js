import React from "react";
import styled from "styled-components";
import { Link} from 'react-router-dom'
import {Connect} from './Connect.js';

import './Navigation.css'

export default function Navigation() {
  return (
    <div>
      <header>
        <Link to="/">
        <div class="logo">
            <img class="logo-img" src= "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/396b926f-25f3-42ab-8003-d3ce1e266bc6.svg?alt=media&token=f8cc9184-677a-44ce-9cc9-489d3f10693a" alt="logo" />
            <div class="logo-text">DemeterDAO</div>
        </div>
        </Link>
         <nav>
             <ul class="nav_links">
                 <Link to="/vote"><li><a href="#">Vote</a></li></Link>
                 <li><a href="#">Treasury</a></li>
                 <li><a href="#">Docs</a></li>
                 <Link to="/access"><li><a href="#">Access</a></li></Link>
             </ul>
         </nav>
         <a class="cta"><Connect /></a>
      </header>
    </div>
  )
}