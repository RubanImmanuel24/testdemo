
import React,  { useEffect }  from 'react';
import {NavLink } from 'react-router-dom';
import './styles/home.css'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import { Carousel } from 'react-responsive-carousel';

function Home(){
    useEffect(() => {
        document.documentElement.scrollTop = 0;
    });
    return(
        <>
				<div className=" nav-bg" >
            		<div className="col-14 mx-auto">
       					 <div className="carousel-wrapper">
          					  	<Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} >
									
									<NavLink to="/Services" >
									 <div href="/home">
                						<img src="../Image/Carousel/DevopsasServicesdoc.jpg"  /> 

               						 </div>
									</NavLink>
									<NavLink to="/24x7-sre" >
                					 <div  >
                  						  <img src="../Image/Carousel/sresilde.jpg" />
                					</div>
									</NavLink>
									<NavLink to="/managed-services" >
               						 <div>
                   			
											 <img src="../Image/Carousel/managedservicesnew.jpg" />
                					</div>
									</NavLink>
									<NavLink to="/manpower-and-technology-consulting" >
                					<div>
                  						  <img src="../Image/Carousel/manpowerslide.jpg" />
               						 </div>
										</NavLink>
										<NavLink to="/software-testing" >
										<div>
                   							 <img src="../Image/Carousel/sofwaretestingslide.jpg" />
               							 </div>
											</NavLink>
											<NavLink to="/cloud-security" >
                					<div>
                   						 <img src="../Image/Carousel/cloudslide.jpg" />
                					</div>
									</NavLink>
           					 </Carousel>
       					 </div>
        			</div>
        		</div>

	


  
  						<div id="accordion">
      						<div className="card-header">
        					<p className="btn abouttext " data-bs-toggle="collapse" href="#collapseOne">
								About Us 
        					</p> |
							<p className="collapsed btn abouttext" data-bs-toggle="collapse" href="#collapseTwo">
       																 Why Choose Us?
      															</p>
					 </div>
      							<div id="collapseOne" className="collapse show abouttext1" data-bs-parent="#accordion">
       									 <div className="card-body">
											InOutTek Solutions. We specialize in delivering tailored software development, IT consulting, and cloud solutions designed to meet the unique needs of our clients. With a team of experienced professionals, we are committed to excellence in every project, ensuring that our clients achieve their goals through cutting-edge technology and strategic insights.
       									 </div>
     							 </div>
													
      											<div id="collapseTwo" className="collapse abouttext1" data-bs-parent="#accordion">
       												 <div className="card-body">
       														 <ul>
										     			 			<li> We harness the latest technologies and development practices to build scalable, high-performance software that meets today’s demands and anticipates future needs.</li>
											  						<li>Our agile approach ensures flexibility and responsiveness throughout the development process, allowing us to adapt quickly to changes and deliver iterative improvements.</li>
											  				        <li>From initial concept to deployment and ongoing support, we provide comprehensive services that cover every aspect of software development, ensuring a seamless experience.</li>
																	  <li>We adhere to the highest standards of quality assurance, ensuring that our software is reliable, secure, and performs optimally in real-world scenarios.</li>
													 			</ul>
       										 </div>
      </div>
    
   
     
    </div>
 




									<div className='homeAboutIntroContentTitle bg-light  '>
											<div className=" p-3  bg-light text-dark" >
													<h2>Our Services</h2>	
														<div className="homeAboutIntroContentTitle   " >
															<div className='container-fluid '>
					   											<div className="row justify-content-center">
					       												<div className="p-2 " >
					          												<Card className="border border-warning " style={{height: '30rem'}}>
							   														<CardTitle className=" p-3 bg-light cardTitleFontFamily cardTitleFontFamilyText ">DevOps as a Service</CardTitle>
																							<NavLink to="/Services" >
																								<img src="../Image/Home/devopsservices.jpg" className="card-img-top" alt="..." width="200" height="250"></img>   
																							</NavLink>
																						<CardBody>
																							<CardText className="cardFontFamily" > At InOutTek Solutions, our DevOps as a Service (DaaS) provides a streamlined approach to managing your development and operations needs. </CardText>
																						</CardBody>
																			</Card>
																		</div>
																			<div className="p-2" >
					                											<Card className="border border-warning" style={{height: '30rem'}}>
																					<CardTitle className="p-2 bg-light  cardTitleFontFamily">24x7-SRE-Site-Reliability-Engineering-Operations	</CardTitle>
																						<NavLink to="/24x7-sre" >
																							<img src="../Image/Services/SRE.jpg" className="card-img-top" alt="..." width="200" height="250"></img>   
																						</NavLink>
																					<CardBody>
									  				 									<CardText className="cardFontFamily">  At InOutTek Solutions, our Site Reliability Engineering (SRE) services ensure that your applications and infrastructure are reliable, scalable, and performant. </CardText>
								    												</CardBody>
									
								    											</Card>
																			</div>
																				<div className="p-2" >
																					<Card className="border border-warning" style={{height: '30rem'}}>
																						<CardTitle className="p-3 bg-light  cardTitleFontFamily cardTitleFontFamilyText"> Managed Services	</CardTitle>
																							<NavLink to="/managed-services" >
																								<img src="../Image/Home/Managed Services.jpg" className="card-img-top" alt="..." width="200" height="250"></img> 
																							</NavLink>
																						<CardBody>
																							<CardText className="cardFontFamily">Our Managed Services provide comprehensive, proactive support for your IT infrastructure, allowing you to focus on your core business while we handle the complexities of technology management. </CardText>
								    													</CardBody>
																					</Card>
																				</div>
																					<div className="p-2" >
																						<Card className="border border-warning" style={{height: '30rem'}}>
																							<CardTitle className="p-2  bg-light cardTitleFontFamily ">Manpower and Technology Consulting		</CardTitle>
																								<NavLink to="/manpower-and-technology-consulting" >
																									<img src="../Image/Services/manpower.jpg" className="card-img-top" alt="..." width="200" height="250"></img>   
																								</NavLink>
																									<CardBody>
																										<CardText className="cardFontFamily"> Our Technology Consulting services are designed to help you harness the full potential of technology to drive business success.	</CardText>
								    																</CardBody>
																							</Card>
																					</div>
																							<div className="p-2" >
																								<Card className="border border-warning" style={{height: '30rem'}}>
																									<CardTitle className="p-3 bg-light cardTitleFontFamily  cardTitleFontFamilyText">Software Testing </CardTitle>
																										<NavLink to="/software-testing" >
																											<img src="../Image/Services/softwaretesting.jpg" className="card-img-top" alt="..."  width="200" height="250"></img>  
																										</NavLink>
																											<CardBody>
																												<CardText className="cardFontFamily"> Our Software Testing services are designed to ensure that your software applications meet the highest standards of quality, performance, and reliability.</CardText>
								    																		</CardBody>
																									</Card>
																							</div>
																										<div className="p-2" >
																											<Card className="border border-warning" style={{height: '30rem'}}>
																													<CardTitle className="p-3 bg-light cardTitleFontFamily  cardTitleFontFamilyText">Cloud Security Engineering </CardTitle>
																													<NavLink to="/cloud-security" >
																														<img src="../Image/Services/cloud.jpg" className="card-img-top" alt="..."  width="200" height="250"></img>  
																													</NavLink>
																													<CardBody>
																														<CardText className="cardFontFamily"> 
																														Our Cloud Security Engineering services are designed to protect your cloud infrastructure from threats and ensure the integrity of your data.</CardText>
								    																				</CardBody>
																											</Card>
																										</div>
																</div>
															</div>
														</div>	
												</div>
									</div>				
    	 </>
    )
}
export default Home;

           