import React, { useEffect } from 'react';
import './styles/home.css'
import { NavLink } from 'react-router-dom';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

function SRE() {

	useEffect(() => {
		document.documentElement.scrollTop = 0;
	});
	return (
		<>
			<div className="Container-fulid col-12">
				<div className="row bg-lightBrown ">
					<div className="col-md ">
						<div className='d-flex'>
							<p className='homeAboutIntroContent'><h3>24x7 SRE</h3></p>
						</div>
						<div className='d-flex'>
							<p className='homeAboutIntroContent'>
								Our Site Reliability Engineering (SRE) Operations service is designed to ensure the reliability, scalability, and performance of your critical systems. By applying software engineering principles to operations, we help you achieve high availability and optimal performance for your services and applications.
							</p>
						</div>
					</div>
					<br></br>
					<br></br>
					<div className="col-md ">
						<NavLink to="/24x7-sre" >
							<img src="../Image/Services/SRE.jpg" className="img-fluid " width="800px;"></img>
						</NavLink>
					</div>
				</div>
				<div className="d-flex">
					<div className="col-6 "><h3 className='devopscontent'>Key Features</h3>
						<div className='homeAboutIntroContent'>
						   <ol>
						     <li>	Reliability and Uptime: Implement strategies and tools to maximize system uptime and reliability, ensuring your services are always available to users.</li>
							 <li>	Performance Monitoring: Continuous monitoring of system performance to identify and resolve issues before they impact users.</li>
							 <li>	Incident Management: Proactive incident response and management to quickly address and mitigate any operational issues.</li>
							 <li>	Automation: Automate routine tasks and processes to reduce manual work and improve efficiency.</li>
							 <li>	Scalability: Design and implement scalable infrastructure to handle growing user demands and traffic.</li>
							 <li>	Root Cause Analysis: Perform thorough analysis to identify the root causes of incidents and implement long-term solutions.</li>
							 <li>	Collaboration and Communication: Foster strong communication and collaboration between development and operations teams to enhance overall system performance.</li>	
						  </ol>	
						</div>
					</div>
					<div className="col-6"><h3 className='devopscontent'>Benefits</h3>
						<div className='homeAboutIntroContent'>
						 	<ul>
							 <li>	 Enhanced Reliability: Ensure your systems are reliable and resilient to failures.</li>	   
							 <li>	 Improved Performance: Maintain optimal performance levels for your applications and services.</li>  
							 <li>	 Reduced Downtime: Minimize downtime and service disruptions through proactive monitoring and incident management.</li> 
							 <li>    Enhanced Reliability: Increase system reliability and availability by implementing best practices for monitoring, logging, and incident management.</li>
							 <li>    Scalable Solutions: Build and maintain infrastructure that can grow with your business needs.</li>
							 <li>    Cost Efficiency: Optimize operations and reduce costs through automation and efficient resource management.</li>
						    </ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default SRE;