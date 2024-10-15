import { Link } from "react-router-dom"
import { User, Navbar } from "components/index"
import { SidebarWrapper, Logo, ButtonCloseSidebar } from "./styles"
import SidebarProps from "./types"
import { UserTestImg } from "assets/index"
import { useState, useEffect } from "react"
export default function Sidebar({ isOpen, onCloseSidebar }: SidebarProps) {


  interface usernameInterface {
    username: string;
  }
 const [userFirstName,setFirstUsername] = useState<usernameInterface|null>(null);
 const [loading, setLoading] = useState<boolean>(true);
 const [error,setError] = useState<Error|null>(null);

 useEffect(()=>
 {
const fetchData = async()=>{
try{
  const response =await fetch('/api/users/username');
  if (!response.ok){
    throw new Error('Network response was not ok');
  } 
  const data =await response.json();

  setFirstUsername(data);

}
catch(error:unknown){
  if(error instanceof Error){
    setError(error);
  }
}
finally{
    setLoading(false);
}
};
fetchData();
},[])

  return (
    <SidebarWrapper isOpen={isOpen}>
      <Link to={"/events/active"} style={{ textDecoration: "none" }}>
        <Logo>Voyagers</Logo>
      </Link>
      <User username={userFirstName==null?("Guest"):(userFirstName.username)} imagePath={UserTestImg} />
      <Navbar />
      <ButtonCloseSidebar onClick={onCloseSidebar}/>
    </SidebarWrapper>
  )
}
