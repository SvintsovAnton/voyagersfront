import styled from "@emotion/styled"
import { colors } from "styles/colors"
import { FormBackground } from "assets"
import {Link} from "react-router-dom"

export const Styledlink = styled(Link)`
  font-family: "Montserrat";
  color: ${colors.secondaryGrey};
  text-decoration: none; 
  &:hover {
    color: ${colors.secondaryGrey}; 
  }
`;


export const LoginPageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.tertiaryGrey};
`

export const LoginFormWrapper = styled.div`
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

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 500px;
  padding: 0px 80px;
  border-right: 7px solid white;
`

export const LoginHeader = styled.h1`
  padding-top: 50px;
  font-family: "Montserrat";
  color: ${colors.secondaryGrey};
`

export const DontHaveAnAccount = styled.p`
  padding-bottom: 20px;
  font-weight: 800;
  font-family: "Montserrat";
  color: ${colors.secondaryGrey};
`

export const SignupLink = styled(Link)`
  font-family: "Montserrat";
  color: ${colors.secondaryGrey};
`

export const ForgotPasswordLink = styled(Link)`
  font-weight: 800;
  font-family: "Montserrat";
  margin: 20px;
  font-size: 14px;
  color: ${colors.secondaryGrey};
`

