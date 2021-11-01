import styled, { keyframes }  from 'styled-components'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import dashboardIcone from '../img/dashboard.svg'
import productsIcone from '../img/products.svg'
import categoriesIcone from '../img/categories.svg'
import ordersIcone from '../img/orders.svg'
import usersIcone from '../img/users.svg'
import newProduct from '../img/newProduct.svg'

const bounce = keyframes `

  0% { transform: scale(1.1); }
  50% { transform:  scale(1.2); }
  100% { transform: scale(1.1); }
`
 const NavIcone = styled.img` 
    transition: all 0.3s ease;
    width: 20px;
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
    &:before{
          content: " ";
    background: rgb(0 0 0 / 20%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: content-box;
    padding: 20px;
    }
  `;
const DashboarToggleTrigger= styled.aside `
position:fixed;
   z-index:900;
  left:5px;
 top: 60px;
display:flex;
flex-direction:column;
justify-content:center;
   background: ${(props) =>(props.isNavOpen === true  ? "#ffffff" : "transparent")};
gap:5px;
    border-radius: 5px;
    padding: 10px;
   box-shadow: ${(props) =>(props.isNavOpen === true  ? " 0 0 5px 0 rgb(0 0 0 / 50%)" : "none")};
    transition: all 0.5s ;
& > img:first-child{

  animation: ${bounce} 1s linear infinite;
}
  `; 
 
  const LinksModal = styled.div`

    transition: all 1s ;
margin-left: ${(props) =>(props.isNavOpen === true  ? "0" : "-150px")};
gap:5px;
display: ${(props) =>(props.isNavOpen === true  ? "flex" : "none")};
flex-direction:column;
  `;

  export default function DashboardNav(){
const [isNavOpen,setIsNavOpen] = useState(false)

    return(
<DashboarToggleTrigger isNavOpen={isNavOpen}>
  
  <NavIcone onClick={(e)=>{setIsNavOpen(!isNavOpen)}} src={dashboardIcone} title='Dashboard Menu' />
  <LinksModal isNavOpen={isNavOpen}>
 <Link to='/dashboard/myProducts' ><NavIcone src={productsIcone} title='Products' /></Link>
  <Link to='/dashboard/newProduct'><NavIcone src={newProduct} title='Create new product' /></Link>
   <Link to='/dashboard/users'><NavIcone src={usersIcone} title='users' /></Link>
  <Link to='/dashboard/categories'><NavIcone src={categoriesIcone} title='Categories' /></Link> 
 <Link to='/dashboard/orders'><NavIcone src={ordersIcone} title='Orders' /></Link>   
 </LinksModal>
</DashboarToggleTrigger>

    );
  }