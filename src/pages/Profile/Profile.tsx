import { Header, User } from "components/index"
import { ProfileWrapper, InfoContainer, Title } from "./styles"
import { UserContainer } from "pages/Settings/styles"
import { UserTestImg } from "assets"
import { useState, useEffect } from "react"
import UserInterface from "pages/Profile/ProfileIntrface";
import ApiError from "pages/ApiError/ApiError";
export default function Profile() {

const [user,setUser] = useState<UserInterface |null >(null);
const [loading,setLoading] = useState<boolean>(true);
const[error,setError] = useState<Error | null >(null);


useEffect (()=>{

  const fetchData = async () =>{
try{
  const response = await fetch(`/api/users/current`);
  if (!response.ok){
    throw new Error('Network response was not ok');
  } 
  const user = await response.json();
  setUser(user);
} catch (error:unknown){
  if (error instanceof Error){
  setError(error);
  }
}
finally {
  setLoading(false);
}
  };
 fetchData();
},[]);


  return (
    <ProfileWrapper>
      <Header></Header>
      {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <ApiError />
    ) : user ? (
      <>
      <UserContainer>
        <User username={user.firstName} imagePath={UserTestImg} />
      </UserContainer>
      <InfoContainer>
        <Title>👤{user.firstName} {user.lastName} </Title>
        <Title>📧 {user.email}</Title>
        <Title>📞 {user.phone}</Title>
        <Title>📅 {user.dateOfBirth}</Title>
        <Title>⚧️ {user.gender}</Title>
      </InfoContainer>
      </>):null}
     
    </ProfileWrapper>
  )
}
