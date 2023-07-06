 import { Link, NavLink } from "react-router-dom";
 import Container from "react-bootstrap/Container";
 // import Nav from 'react-bootstrap/Nav';
 // import Navbar from 'react-bootstrap/Navbar';
 const Header = () => {
   return (
     <header>
       <div className="container">
         <div className="d-flex justify-content-between align-items-center">
           <div className="logo">
             <Link to="/" className="brand">
               WSP
             </Link>
           </div>
           <nav className="nav nav-pills">
             <NavLink
               to="/"
               className={(navData) =>
                 navData.isActive ? "nav-link active" : "nav-link"
               }
             >
               Home
             </NavLink>
             <NavLink
               to="about"
               className={(navData) =>
                 navData.isActive ? "nav-link active" : "nav-link"
               }
             >
               About
             </NavLink>
             <NavLink
               to="products"
               className={(navData) =>
                 navData.isActive ? "nav-link active" : "nav-link"
               }
             >
               Products
             </NavLink>
           </nav>
         </div>
       </div>
     </header>
   );
 };
 export default Header;