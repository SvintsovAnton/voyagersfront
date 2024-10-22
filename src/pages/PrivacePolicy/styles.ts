import styled from "@emotion/styled";
import {colors} from"styles/colors";
import { FormBackground } from "assets";
import {Link} from "react-router-dom";

export const PrivacePoliceWrapper = styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
background-color:${colors.tertiaryGrey}`;

export const PrivacePolicerapper = styled.div`
  display: flex;
  overflow: auto;
  min-width: 60vw;
  height: 70vh;
  border-radius: 50px;
  background-image: url(${FormBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const TextBoxContainer = styled.div`
`