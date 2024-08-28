import React, { useEffect } from 'react';
import './styles/home.css'
import { NavLink } from 'react-router-dom';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

function CloudSecurity() {

	useEffect(() => {
		document.documentElement.scrollTop = 0;
	});
	return (
		<>
			

			
				<div className="row bg-lightBrown ">
					<div className="col-md ">
						<div className='d-flex '>
							<div className='homeAboutIntroContent'>
								<p className="Services-div "><h2>Cloud Security Engineering</h2></p>
							</div>
						</div>
						<div className='d-flex'>
							<p className='homeAboutIntroContent'>
							At InOutTek Solutions, our Cloud Security Engineering services are dedicated to safeguarding your cloud environments and ensuring the protection of your data
							</p>
						</div>
					</div>
					<br></br>
					<br></br>

					<div className="col-md ">
					
							<img src="../Image/Services/cloud.jpg" className="img-fluid" width="500px;" ></img>
					
					</div>
				</div>


			

			<div className="d-flex">
				<div className="col"><h3 className='devopscontent'>Cloud Security Engineering by InOutTek Solutions</h3>

					<div className='Services'>
					    <ol>
						<li> 	Risk Assessment: Thoroughly evaluating your cloud infrastructure to identify and address potential security vulnerabilities and risks.</li>
						<li> 	Advanced Threat Detection: Implementing cutting-edge tools and techniques to monitor and detect threats in real-time, protecting your assets from potential breaches.</li>
						<li> 	Compliance Assurance: Ensuring your cloud practices comply with industry regulations and standards, including GDPR, HIPAA, and others, to safeguard sensitive information.</li>
						<li> 	Security Architecture Design: Designing and implementing robust security frameworks tailored to your specific cloud environment, enhancing overall security posture.</li>
						<li> 	Incident Management: Providing rapid response and effective incident management to address and resolve security issues quickly, minimizing impact and downtime.</li>
						<li> Continuous Monitoring and Improvement: Offering ongoing monitoring and regular updates to adapt to new threats and ensure your cloud environment remains secure and resilient.</li>
						</ol>
						Choose InOutTek Solutions for Cloud Security Engineering that delivers comprehensive protection and peace of mind, ensuring your cloud infrastructure is secure, compliant, and resilient.
					</div>
				</div>
		
			</div>
		</>
	)
}

export default CloudSecurity;