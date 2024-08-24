import React from "react";
import {NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

import "./styles/header.css";

function Navbarheader(){
  

  function handleCollapse (){
    var nav = document.getElementById("responsive-navbar-nav");
    var btn = document.getElementById("btntoggler");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };
    return(
        <>
            <div className="row">
                <div className="col-12 mx-auto container">
                      <Navbar collapseOnSelect expand="lg" className="InOutTek-navbar-bg" variant="white">
                          <div className="elementor-image">
                            <img width="50" height="50" src="../Image/Header/outtek_new.png"></img>  
									      	</div>
                          <div className="inouttek">
                               <h3><b>InOutTek Solutions</b></h3>
                          </div>
                            <nav className=" navbar-dark bg-blue">
                                    <button id="btntoggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav" aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" >
                                        <span className="navbar-toggler-icon"></span>
                                      </button>
                            </nav>
                              <ul></ul>
                              <ul></ul>
                              <ul></ul>
                              <Navbar.Collapse id="responsive-navbar-nav" >
                                  <Nav className=" Navbar_text lg-auto text-left ">
                                    <h6><NavLink  to="/home"  className={(navData) => (navData.isActive ? "active nav-link " : 'nav-link')} onClick={handleCollapse } >Home</NavLink></h6>
                                    <ul></ul>
                                    <h6><NavLink to="/about" className={(navData) => (navData.isActive ? "active nav-link" : 'nav-link')} onClick={handleCollapse} >About</NavLink></h6>
                                    <ul></ul>
                                    <div className="dropdown " >
                                       <NavLink to="/Services" className={(navData) => (navData.isActive ? "active nav-link" : 'nav-link'  )}   data-bs-toggle="dropdown"   > 
                                          <h6 className=" dropdown-toggle">Services </h6>
                                      </NavLink>
                                      <ul className="dropdown-menu">
                                           <li><a className="dropdown-item"  href="services">DevOps as a Service</a></li>
                                           <li><a className="dropdown-item" href="24x7-sre">24x7 SRE</a></li>
                                           <li><a className="dropdown-item" href="managed-services">Managed Services</a></li>
                                           <li><a className="dropdown-item" href="manpower-and-technology-consulting">Manpower and Technology Consulting</a></li>
                                           <li><a className="dropdown-item" href="software-testing">Software Testing</a></li>
                                           <li><a className="dropdown-item" href="cloud-security">Cloud Security Engineering</a></li>
                                       </ul>
                                    </div>              
                                    <ul></ul>
                                      <h6> <NavLink to="/home" className={(navData) => (navData.isActive ? "active nav-link" : 'nav-link')} onClick={handleCollapse}>Career</NavLink></h6>
                                    <ul></ul>
                                    <h6> <NavLink to="/home" className={(navData) => (navData.isActive ? "active nav-link" : 'nav-link')} onClick={handleCollapse}>Blog</NavLink></h6>
                                      <ul></ul>
                                      <h6> <NavLink to="/Contact" className={(navData) => (navData.isActive ? "active nav-link" : 'nav-link')} onClick={handleCollapse} >Contact</NavLink></h6>    
                                 </Nav>
                               </Navbar.Collapse>
                       </Navbar>        
               </div>
          </div>
       </>
    )
}
export default Navbarheader;