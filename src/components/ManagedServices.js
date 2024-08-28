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
										<p className='homeAboutIntroContent'><h2>Managed Services</h2></p>
									</div>
										<div className='d-flex'>
											<p className='homeAboutIntroContent'>
											At InOutTek Solutions, our Managed Services provide comprehensive, proactive support for your IT infrastructure, allowing you to focus on your core business while we handle the complexities of technology management.
											</p>
										</div>
						</div>
								<br></br>
								<br></br>
									
									<div className="col-md ">
											
												<img src="../Image/Services/Consulting.jpg" className="img-fluid " width="800px; "></img>
											
									</div>
				</div>
			</div>

					<div className="d-flex">
    					<div className="col "><h3 className='devopscontent'>Our Manpower and Technology Consulting Services</h3>
    						<div className='homeAboutIntroContent'>
								<ol>
								<li>Strategic Workforce Planning: Assessing your current and future staffing needs to ensure you have the right talent in place to achieve your business objectives.</li>
								<li>Technology Advisory: Providing expert guidance on selecting, implementing, and optimizing technology solutions that align with your strategic goals.</li>
								<li>Skill Development and Training: Offering targeted training programs to enhance your team’s skills and ensure they are equipped to leverage the latest technologies effectively.</li>
								<li>Change Management: Supporting you through technology transitions and organizational changes with strategies that minimize disruption and maximize adoption.</li>
								<li>Process Improvement: Identifying and implementing best practices to streamline operations, improve efficiency, and enhance overall performance.	</li>
								</ol>
   							 </div>
   						 </div>
    					
					</div>
        </>
	    )
	}
	export default ManagedServices;