import styled  from 'styled-components'
import { withError } from './../withError'
import useMyProfile from '../../hooks/useMyProfile'
import {Link} from 'react-router-dom'

import FormImg from '../../img/user-circle-solid.svg'

export const Section = styled.section`
display:flex;
justify-content:center;
align-items: center;
margin:0;
min-height:100vh;
width:100vw;
padding:60px 15px 40px;
`;
const UserCard =styled.article`
margin:30px auto;
display:flex;
height:max-content;
flex-wrap:wrap;
min-height: 250px;
 border-radius: 5px;
box-shadow :${props => props.theme.lightBoxShadow};
`;
const CardImg = styled.div`
min-height: 100%;
border-radius: 5px;
 padding:10px 0;
display:flex;
flex:1 1 150px;
width:100%;
align-items:center;
justify-content:center;
`;
const Img = styled.img` 
width:120px;
`;
const CardInfo = styled.div` 
color:#fff;
padding:15px;
min-height: 250px;
flex:1 1 400px;
background:${props => props.theme.black};
border-radius: 5px;
`;
const UserInfo = styled.dd` 
margin: 5px 0;
text-transform:capitalize;
`;

const EditButton = styled(Link)`
padding:5px 8px;
cursor:pointer;
text-decoration:none;
 border-radius: 5px;
font-weight:600;
margin-left: 80%;
border: none;
background: #fff;
color:${props => props.theme.black};
transition:all 0.3s ease;
&:hover{
  background: ${props => props.theme.gray};

 }
`
const LogoutButton = styled.button`
padding: 4px 8px;
    padding-top: 0;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    border: none;
    font-family: "Oswald",sans-serif;
    font-size: 19px;
    margin: 10px 40%;
    background:${props => props.theme.orange};
    color: #fff;
        transition:all 0.5s ease;
    &:hover{

          background: #ef4537;
    }
`;
function MyProfile() {

  const {handleLogout,currentUser}=  useMyProfile()
  



  return (
    <Section>
      <UserCard>
        <CardImg><Img src={FormImg} alt="user"/></CardImg>
 <CardInfo>
   <EditButton to="/myAccount/editProfile">Edit</EditButton>
        <dl>
    <dt>Name: </dt>  <UserInfo>{currentUser.name}</UserInfo>
   <dt>Email:  </dt><UserInfo>{currentUser.email}</UserInfo>
</dl>


<p><i><small>Allow us to contact us immediately with any questions or unforeseen events.</small></i></p>


     <dl>
          <dt>Telephone: </dt><UserInfo>{currentUser.number || "No number supplied" }</UserInfo>
             <p>  <i><small>Your order will be shipped to the address provided.</small></i></p>
         <dt>Address: </dt><UserInfo>{currentUser.address || "No address supplied" }</UserInfo>
</dl>

             <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </CardInfo>
      </UserCard>


    </Section>
   
  )
}

export default withError(MyProfile)
