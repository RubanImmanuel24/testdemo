import React ,  { useEffect }  from 'react';
import './styles/home.css'
import {NavLink } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter
  } from 'reactstrap';

function Manpower(){

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    });
    return(
        <>
       
       		<div className="Container-fulid col-12">
						<div className="row bg-lightBrown ">
								<div className="col-md ">
									<div className='d-flex'>
										<p className='homeAboutIntroContent'><h3>Manpower and Technology Consulting</h3></p>
									</div>
											<div className='d-flex'>
												<p className='homeAboutIntroContent'>
															Manpower and Technology Consulting is a specialized service aimed at optimizing an organization’s human resources and technological infrastructure. The primary goal is to enhance efficiency, effectiveness, and overall performance through strategic management of people and technology. Here’s a breakdown of what this consulting involves
												</p>
											</div>
								</div>
								<br></br>
								<br></br>
									
										<div className="col-md ">
											<NavLink to="/manpower-and-technology-consulting" >
													<img src="../Image/Services/manpower.jpg" className="img-fluid " width="800px; "></img>
											</NavLink>
										</div>
						</div>
                        
						 			<div className="d-flex">
    									<div className="col-6"><h3 className='devopscontent'>Key Features</h3>
   											 <div className='homeAboutIntroContent'>
												    <ol>
													<li>Holistic Approach: Combines expertise in human resources and technology to deliver comprehensive solutions.</li>
													<li>Tailored Solutions: Develops strategies and solutions specific to the organization's unique needs and goals.</li>
													<li>Specialized Knowledge: Provides access to experts in both human resources and technology.</li>
													<li>Systems Assessment: Evaluates current technology and suggests improvements or new implementations.</li>
													<li>Recruitment: Assists with attracting and hiring the right talent for critical roles.</li>
													<li>Transition Planning: Develops strategies to manage changes related to technology or organizational structure.</li>
													</ol>
   											 </div>
    									</div>
    									<div className="col-6"><h3 className='devopscontent'>Benefits</h3>
       										 <div className='homeAboutIntroContent'>
												<ul>
													<li> Streamlined Operations: Optimizes processes and workflows through better technology and workforce management.	  </li>
													<li> Skilled Workforce: Develops a more capable and motivated workforce through targeted training and development.  </li>
													<li> Resource Optimization: Reduces operational costs by improving resource allocation and minimizing waste. </li>
													<li> Data Insights: Provides actionable insights through data analytics, supporting informed decision-making.</li>
													<li> Innovation: Keeps the organization at the forefront of industry trends and technological advancements.</li>
													<li> Adaptability: Enables the organization to scale operations up or down based on business needs and market conditions.</li>
												</ul>
        									</div>                         
										</div>
									</div>
			</div>
        </>
	    )
	}
	
	export default Manpower;