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
			

			<div className="Container-fulid col-12">
				<div className="row bg-lightBrown ">
					<div className="col-md ">
						<div className='d-flex '>
							<div className='homeAboutIntroContent'>
								<p className="Services-div "><h3>Cloud Security Engineering</h3></p>
							</div>
						</div>
						<div className='d-flex'>
							<p className='homeAboutIntroContent'>
								Cloud Security Engineering focuses on protecting cloud-based systems and data. It involves designing and implementing security measures to safeguard cloud infrastructure, applications, and data from various threats.
							</p>
						</div>
					</div>
					<br></br>
					<br></br>

					<div className="col-md ">
						<NavLink to="/cloud-security" >
							<img src="../Image/Services/cloud.jpg" className="img-fluid" width="500px;" ></img>
						</NavLink>
					</div>
				</div>


			</div>

			<div className="d-flex">
				<div className="col-6"><h3 className='devopscontent'>Key Features</h3>

					<div className='Services'>
					    <ol>
						    <li> Identity and Access Management (IAM): Ensuring that only authorized users and services can access cloud resources. This includes managing roles, permissions, and authentication . </li>
							<li> Data Protection: Encrypting data at rest and in transit to prevent unauthorized access. This also involves managing encryption keys and ensuring compliance with data protection regulations.</li>
							<li> Network Security: Implementing security controls such as firewalls, Virtual Private Networks (VPNs), and intrusion detection/prevention systems to protect cloud networks.</li>
							<li> Compliance and Governance: Ensuring that cloud deployments comply with relevant regulations and standards, such as GDPR, HIPAA, or PCI-DSS. This includes maintaining documentation and conducting audits.</li>
							<li> Automation and DevSecOps: Integrating security into the development and operations processes through automation, continuous integration/continuous deployment (CI/CD) pipelines, and infrastructure as code (IaC) practices.</li>
						</ol>
					</div>
				</div>
				<div className="col-6"><h3 className='devopscontent'>Benefits</h3>
					<div className='homeAboutIntroContent'>
				    	<ul>
						   <li> Encryption: Ensures that sensitive data is protected both at rest and in transit, minimizing the risk of unauthorized access and data breaches.</li>
						   <li> Adherence to Standards: Helps meet industry-specific regulations such as GDPR, HIPAA, PCI-DSS, and more, reducing the risk of legal and financial penalties.</li>
						   <li> Risk Mitigation: Identifies and addresses vulnerabilities and threats proactively, reducing the likelihood of successful attacks.</li>
						   <li> Automated Security: Streamlines security tasks through automation, reducing manual effort and the risk of human error.</li>
						   <li> Reduced Breach Costs: Minimizes the financial impact of data breaches, including potential fines, legal fees, and remediation costs.</li>
					    </ul>	
					</div>
				</div>
			</div>
		</>
	)
}

export default CloudSecurity;