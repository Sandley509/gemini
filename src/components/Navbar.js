import react from 'react';
import styled from 'styled-components';



const Navbar = () => {
    return (
      <StyledNavbar>
         
        <StyledUsername> Sandy Estalien</StyledUsername>
        <StyledLogout> Logout  </StyledLogout>
        
      </StyledNavbar>
    );
  };
  
  export default Navbar;




const StyledNavbar= styled.nav`
    display:flex;
    flex-direction:row;
    height:50px;
    background-color:#071644;
    font-size:10px;




`;
const StyledUsername=styled.h1`
    margin-left: 10px;
    font-size:16px;
    color:#fff; 



`;
const StyledLogout=styled.button`

        margin-left:auto;
        margin-right:10px;
        margin-top: 8px;
        font-weight:bolder;
        text-transform:uppercase;
        background-color:red;
        color:white;
        border-radius:6px;
        width:80px;
        height:35px;
        padding:5px;
        cursor:pointer;
        boder:none;
        &:hover {
            background-color: #7a090b;
        }



`;