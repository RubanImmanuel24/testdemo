import React from 'react';

import "./styles/footer.css";
	
	function Footer(){
	    return(
	        <>
        		 <div className="row">
         				<div className="col-12 mx-auto container">
									<div className="col-12 mx-auto footer-div-bgcolor-line">
									</div>
			 					<div className=" nav-bg " >
            							<div className="col-12 mx-auto footer-div-bgcolor">
												<div className="p-3   ">
														<div className="row " >
																<div className="p-3  footer-div-list " >
																	<div className='footer-text-left'>
                                        											<h1 className="footer-div-content-title text-start footer-font-title"  align="left" >Who We Are</h1>
																					<a href="About"><p className="footer-div-content-item footer-font text-start"  align="left">About</p> </a>  
                                       												 <h6 className="footer-div-content-item footer-font text-start"  align="left">Our Partners </h6>  
																 	</div>
																</div> 
																		<ul></ul>
																		<ul></ul>
										 						<div className="p-3  footer-div-list" > 
                                        								<h6 className="footer-div-content-title footer-font-title"  align="left" >What We Do</h6>
																		<a href="services"><h6 className="footer-div-content-item footer-font"  align="left">DevOps as a Services</h6></a>   
                                        								<a href="24x7-sre"><h6 className="footer-div-content-item footer-font"  align="left">24x7 SRE-Site Reliability Engineering Operations </h6></a>  
																		<a href="Managed-Services" ><h6 className="footer-div-content-item footer-font"  align="left">Managed Services</h6> </a>  
                                        								<a href="manpower-and-technology-consulting" ><h6 className="footer-div-content-item footer-font"  align="left">Manpower and Technology Consulting </h6></a>  
																		<a href="software-testing" ><h6 className="footer-div-content-item footer-font"  align="left">Software Testing </h6></a> 
																		<a href="cloud-security" ><h6 className="footer-div-content-item footer-font"  align="left">Cloud Security Engineering </h6></a> 
												 				</div>
															 <ul></ul>
										 							<div className="p-3  footer-div-list" > 
                                        									<h6 className="footer-div-content-title footer-font-title"  align="left" >Contact</h6>
                                        									<a href="Contact" ><h6 className="footer-div-content-item footer-font"  align="left">Contact Us</h6></a>   
                                        									<h6 className="footer-div-content-item footer-font"  align="left">Career </h6> 
										 			          		</div>
																	<ul></ul>
																	<ul></ul>
																	<ul></ul>
										 							<div className="p-3  footer-div-list" > 
										 								<h6 className="footer-div-content-title footer-font-title"  align="center" >Join Us!</h6>
										 								<div className="elementor-image">
																			<h1 className="footer-div-content-item footer-font">
																				&#169;  InOutTek Solutions  2024
																			</h1>
																		</div>
																	 </div>		
														</div>
												</div>
										</div>
								</div>
						</div>
				</div>
	        </>
	    )
	}
	export default Footer;
