import React, { useEffect } from 'react';
import './styles/home.css'
import { NavLink } from 'react-router-dom';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

function Services() {

	useEffect(() => {
		document.documentElement.scrollTop = 0;
	});
	return (
		<>
			<div className="Container-fulid col-12">
				<div className="row bg-lightBrown ">
					<div className="col-md ">
						<div className='d-flex '>
							<div className='homeAboutIntroContent'>
								<h2>DevOps as a Services</h2>
							</div>
						</div>
						<ul></ul>
						<div className='d-flex'>
							<div className='homeAboutIntroContent'>
								<h4>Transforming Development and Operations</h4>
							</div>
						</div>
						<ul></ul>
						<div className='d-flex'>
							<p className='homeAboutIntroContent'>
								Our DevOps as a Service (DaaS) offering provides a comprehensive solution to streamline and enhance your software development and IT operations. By leveraging cutting-edge tools and practices, we enable continuous integration, continuous delivery (CI/CD), and seamless collaboration between your development and operations teams.
							</p>
						</div>
					</div>
					<br></br>
					<br></br>
					<div className="col-md ">
						
							<img src="../Image/Services/devopsservices.jpg" className="img-fluid" width="800px;" ></img>
						
					</div>
				</div>
			</div>

			<div id="accordion">
      						<div className="card-header">
        					<p className="btn abouttext " data-bs-toggle="collapse" href="#collapseOne">
							Key Features
        					</p> |
							<p className="collapsed btn abouttext" data-bs-toggle="collapse" href="#collapseTwo">
							Benefits
      															</p>
					 </div>
      							<div id="collapseOne" className="collapse show abouttext1" data-bs-parent="#accordion">
       									 <div className="card-body">
											<ol>
											<li>	End-to-End Automation: Automate the entire software development and deployment process, from code integration to production, reducing manual intervention and minimizing errors.</li>
					      <li>	Continuous Integration/Continuous Delivery (CI/CD): Implement robust CI/CD pipelines to ensure rapid, reliable, and repeatable software releases.</li>
					      <li>	Infrastructure as Code (IaC): Manage and provision infrastructure using code, enabling consistent and reproducible environments across development, testing, and production.</li>
					      <li>	Monitoring and Logging: Integrate comprehensive monitoring and logging solutions to gain real-time insights into system performance, enabling proactive issue resolution.</li>
					      <li>	Scalability: Design and implement scalable infrastructure to handle varying workloads and support business growth.</li>
					      <li>	Security Integration: Incorporate security practices into the DevOps workflow, ensuring that security is a fundamental aspect of the development and deployment process.</li>
					      <li>	Collaboration Tools: Utilize advanced collaboration tools to enhance communication and coordination between development, operations, and other stakeholders.</li>
						  </ol>
       									 </div>
     							 </div>
													
      											<div id="collapseTwo" className="collapse abouttext1" data-bs-parent="#accordion">
       												 <div className="card-body">
														<ul>
					      <li> Faster Time to Market: Accelerate software development and deployment cycles, allowing your business to quickly respond to market changes and customer needs.</li>
					      <li> Improved Quality: Enhance the quality of your software through automated testing, continuous integration, and continuous delivery practices.</li>
					      <li> Operational Efficiency: Reduce operational overhead and improve efficiency through automation and streamlined workflows.</li>
					      <li> Enhanced Reliability: Increase system reliability and availability by implementing best practices for monitoring, logging, and incident management.</li>
					      <li> Scalability and Flexibility: Build and maintain scalable infrastructure that can adapt to changing business requirements and workloads.</li>
					       <li> Cost Savings: Optimize resource utilization and reduce costs associated with manual processes and downtime.</li>
					  </ul>
       										 </div>
      </div>
    
   
     
    </div>
		
			
		</>
	)
}

export default Services;