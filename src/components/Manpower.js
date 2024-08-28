import React ,  { useEffect }  from 'react';
import './styles/home.css'


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
										<p className='homeAboutIntroContent'><h2>Manpower and Technology Consulting</h2></p>
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
											
													<img src="../Image/Services/manpower.jpg" className="img-fluid " width="800px; "></img>
										
										</div>
						</div>
                        
						 			<div className="d-flex">
    									<div className="col"><h3 className='devopscontent'>Our Manpower and Technology Consulting Services
										</h3>
   											 <div className='homeAboutIntroContent'>
												    <ol>
													<li>24/7 Monitoring and Support: Continuous monitoring of your systems with round-the-clock support to address any issues before they impact your operations.</li>
								<li>Proactive Maintenance: Regular updates, patch management, and performance optimization to ensure your IT environment is secure and running efficiently.</li>
								<li>Cloud Management: Expert management of your cloud resources, including provisioning, scaling, and cost optimization.</li>
								<li>Security and Compliance: Implementing robust security measures and ensuring compliance with industry standards to protect your data and infrastructure.</li>
								<li>Incident Response and Recovery: Rapid response to incidents and effective disaster recovery solutions to minimize downtime and data loss.</li>
													</ol>
   											 </div>
    									</div>
    							
									</div>
			</div>
        </>
	    )
	}
	
	export default Manpower;