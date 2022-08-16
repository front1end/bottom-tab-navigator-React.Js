import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faAddressBook, faBookmark,  faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";


const tabs = [{
  route: "/",
  icon: faBookmark,
  label: "Home"
},{
  route: "/works",
  icon: faCode,
  label: "Works"
},{
  route: "/contact",
  icon: faAddressBook,
  label: "Contact"
},{
  route: "/login",
  icon: faUserTie,
  label: "Login"
}]

const  Navigation = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Mr Omar</a>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/portfolio" className="nav-link">
                Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/resume" className="nav-link">
                Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" className="nav-link">
                Contact
                </NavLink>
              </NavItem>   
                    
            </Nav>
            <div className="socialmedia">
              <a href="" className="nav-link social-link">
              <FaGithub />
              </a>  
              <a href="" className="nav-link social-link">
               <FaLinkedin />  
              </a>  
              </div> 
        </div>
      </nav>
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
        <a className="navbar-brand logo-btm" href="/">Mr Omar</a>
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;
