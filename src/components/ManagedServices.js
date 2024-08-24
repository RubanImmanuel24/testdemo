import React ,  { useEffect }  from 'react';
import './styles/home.css'
import {NavLink } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter
  } from 'reactstrap';

function ManagedServices(){

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    });
    return(
        <>        
			<div className="Container-fulid col-12">
				<div className="row bg-lightBrown ">
						<div className="col-md ">
									<div className='d-flex'>
										<p className='homeAboutIntroContent'><h3>Managed Services</h3></p>
									</div>
										<div className='d-flex'>
											<p className='homeAboutIntroContent'>
												Managed Services refer to the practice of outsourcing certain business operations or functions to a third-party service provider. This approach allows organizations to focus on their core business activities while relying on external experts to handle specific aspects of their operations. Managed Services can cover a wide range of areas, including IT, human resources, finance, and more. Here’s a detailed overview.
											</p>
										</div>
						</div>
								<br></br>
								<br></br>
									
									<div className="col-md ">
											<NavLink to="/managed-services" >
												<img src="../Image/Services/Consulting.jpg" className="img-fluid " width="800px; "></img>
											</NavLink>
									</div>
				</div>
			</div>

					<div className="d-flex">
    					<div className="col-6 "><h3 className='devopscontent'>Key Features</h3>
    						<div className='homeAboutIntroContent'>
								<ol>
									<li> Network Management: Monitoring and managing an organization’s network infrastructure to ensure reliability and performance.</li>
									<li> Cloud Services: Managing cloud-based resources, including storage, applications, and platforms.</li>
									<li> Customer Service: Handling customer inquiries, support, and service through call centers or other channels.</li>
									<li> Human Resources: Handling recruitment, benefits administration, and compliance.</li>
									<li> Facilities Management: Overseeing the operation and maintenance of physical facilities.</li>
									<li> Marketing and Sales Support: Managing aspects of marketing campaigns, sales processes, and customer relationship management.</li>
								</ol>
   							 </div>
   						 </div>
    							<div className="col-6"><h3 className='devopscontent'>Benefits</h3>
      								<div className='homeAboutIntroContent'>
									  		<ul>
											  <li>Predictable Costs: Managed services typically operate on a subscription or service-based model, providing predictable and stable costs.</li>	   
											  <li> Access to Specialized Skills: Providers bring specialized knowledge and experience that may not be available internally.</li>	
											  <li> Increased Focus: Allows organizations to concentrate on their core business functions and strategic goals, rather than managing day-to-day operational tasks.</li>	
											  <li> Adaptability: Managed services can be scaled up or down based on business needs, providing flexibility to respond to changes in demand.</li>	
											  <li> Performance Monitoring: Providers typically offer robust monitoring and performance management, ensuring high-quality service delivery.</li>	
											  <li> Round-the-Clock Availability: Many managed services offer 24/7 support, ensuring that issues are addressed promptly and minimizing downtime.</li>	
											</ul>
       								 </div>                         
                            
								</div>
					</div>
        </>
	    )
	}
	export default ManagedServices;