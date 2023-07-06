 import React from "react";
 import { Link, NavLink } from "react-router-dom";
 const Footer = () => {
   const currentYear = new Date().getFullYear(); //otomatik yıl güncelleme
   return (
     <footer className="footer">
       <div className="container">
         <nav className="d-flex justify-content-center">
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
         <div className="copyrights">
           &copy;{currentYear} <Link to="/">WebstylePress </Link> - All Rights
           Reserved
         </div>
       </div>
     </footer>
   );
 };
 export default Footer;







