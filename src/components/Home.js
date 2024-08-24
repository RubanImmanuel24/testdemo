
import React,  { useEffect }  from 'react';
import {NavLink } from 'react-router-dom';
import './styles/home.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter
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
               						 <div href="/home">
                						<img src="../Image/Carousel/DevopsasServicesdoc.jpg"   />
               						 </div>
                					 <div>
                  						  <img src="../Image/Carousel/sresilde.jpg" />
                					</div>
               						 <div>
                   						  <img src="../Image/Carousel/managedservices.jpg" />
                					</div>
                					<div>
                  						  <img src="../Image/Carousel/manpowerslide.jpg" />
               						 </div>
										<div>
                   							 <img src="../Image/Carousel/softwaretestingslide.jpg" />
               							 </div>
                					<div>
                   						 <img src="../Image/Carousel/cloudslide.jpg" />
                					</div>
           					 </Carousel>
       					 </div>
        			</div>
        		</div>





				

		 				<div className="row AbutUs">
  							<button className="btnbtn-default border-inline-start-color abouttext" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
 								 About Us
 							 </button>
 								 	<button className="btnbtn-default border-inline-start-color abouttext" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1"   aria-expanded="false" aria-controls="collapseExample" >
  										Why Choose Us?
  									</button>
  										<button type="button" className="btnbtn-default border-inline-start-color abouttext" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
 											 Your Success, Our Mission
 										 </button>
						</div>
								<div className="collapse" id="collapseExample">
  									<div className="row container col-12">
										<div className='flex aboutcontent abouttext1'>
         									<p> With a comprehensive portfolio of services, we serve a diverse global client base. From pioneering “Build, Own, Operate, and Transfer” (BOOT) solutions to delivering innovative “DevOps as a Service,” our offerings are designed to propel your business forward.</p> 
  											<h5 className="aboutcontent">Global Reach, Local Excellence</h5>
 											 <p>We understand that your success knows no boundaries, and neither does our dedication. With a client base spanning the globe, we bring tailor-made solutions to businesses worldwide. Our promise is to provide the same level of excellence and innovation, no matter where your operations are based.</p>
  										</div>
  									</div>
								</div>
								<div className="collapse" id="collapseExample1">
  									<div className="row container col-12">
  										<div className='flex aboutcontent abouttext1'>
										  <ul>
										      <li> Experience and Expertise: With years of experience and a team of industry experts, we bring valuable insights and cutting-edge solutions to your projects.</li>
											  <li>Reliability: Our “24×7 SRE Operations” and robust “Cloud Security Engineering” ensure that your operations run smoothly, securely, and without interruption.</li>
											  <li>Commitment to Excellence: We’re not just a service provider; we’re your partner in growth. Our “Managed Services” and “Manpower and Technology Consulting” empower your business to reach new height.</li>
										 </ul>
  										</div>
									</div>
								</div>
									<div className="collapse" id="collapseExample2">
  										<div className="row container col-12">
  											<div className='flex aboutcontent abouttext1'>
  												<p>At InOutTek, we measure our success by yours. Our vision is to be at the forefront of innovation, enabling you to thrive in a constantly evolving business landscape. With us, your aspirations become reality, and your challenges turn into opportunities.</p>
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
																							<CardText className="cardFontFamily" > DevOps emphasizes continuous integration, continuous delivery (CI/CD), and the use of tools and practices that facilitate automation, monitoring, and collaboration. </CardText>
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
									  				 									<CardText className="cardFontFamily">  Our Site Reliability Engineering (SRE) Operations service is designed to ensure the reliability, scalability, and performance of your critical systems. </CardText>
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
																							<CardText className="cardFontFamily"> Managed Services refer to the practice of outsourcing certain business operations or functions to a third-party service provider. </CardText>
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
																										<CardText className="cardFontFamily"> Manpower and Technology Consulting is a specialized service aimed at optimizing an organization’s human resources and technological infrastructure.	</CardText>
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
																																Cloud security engineering is a specialized field focused on protecting data, applications, and infrastructure in cloud environments.</CardText>
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

           