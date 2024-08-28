import React,  { useEffect } from 'react';
import './styles/about.css';
	
	function About(){
		useEffect(() => {
			document.documentElement.scrollTop = 0;
		});

        return(
	    <>
			<div className="Container-fulid col-12">
				<div className="row bg-lightBrown ">
							<div className="col-md offset">
								<div className="col-6 homeIntroAboutTitle ">About Us
										<div className='homeClientsHeaderDiv AboutleftDiv'></div>
								</div>
									<ul></ul>
									<div className='d-flex'>
										<p className='homeAboutIntroContent'>
											In the competitive landscape of modern software development, efficient and reliable release processes are crucial for success. InOutTek Solutions specializes in DevOps Release Engineering and Automation, providing businesses with the strategies, tools, and expertise necessary to streamline the release processes, enhance collaboration, and ensure continuous delivery of high-quality software.
										</p>
									</div>
							</div>
								<br></br>
								<br></br>			
							<div className="col-md ">
								<a href="About">
									<img src="../Image/About/About.jpg" className="img-thumbnail"  width="500px;"></img>
								</a>
							</div>
						</div>
					</div>
						<ul></ul>					
					<div className="Container-fulid col-12">
					   <div className="row col-md ">
						   <div className='d-flex'>
							<a href="About">
								<img src="../Image/About/Devopsicon.jpg" className="img-thumbnail"  width="500px;"></img>
							</a>
							</div>			
							<div className="col-md ">
								<div className=" homeIntroAboutTitle "> Our Services
									<div className='homeClientsHeaderDiv AboutleftDiv'></div>
								</div>
							<ul></ul>
									<div className='d-flex'>
										<p className='homeAboutIntroContent'>
										At InOutTek Solutions, we specialize in delivering top-notch software development services that empower businesses to thrive in the digital age. Our offerings includes.Tailored software solutions designed to meet the specific needs and goals of your business.Implementing scalable cloud-based applications and services that enhance flexibility and reduce costs.Designing and integrating APIs to connect systems, enabling smooth data exchange and functionality.Offering ongoing support to ensure your software remains up-to-date, secure, and performing at its best.
										</p>
									</div>
							</div>
								<br></br>
								<br></br>		
						</div>
		</div>
		<div className="Container-fulid col-12">
				<div className="row bg-lightBrown ">
							<div className="col-md offset">
								<div className="col-6 homeIntroAboutTitle "> Why Choose Us?
										<div className='homeClientsHeaderDiv AboutleftDiv'></div>
								</div>
									<ul></ul>
									<div className='d-flex'>
										<p className='homeAboutIntroContent'>
										At InOutTek Solutions, we are committed to delivering exceptional IT solutions that empower businesses to thrive in the digital world. Here’s why we’re the right choice for your IT needs: Our team comprises skilled professionals with deep knowledge across all areas of IT, including software development, cloud computing, cybersecurity, and more. We understand that every business is unique, so we tailor our services to align perfectly with your specific goals and challenges.We pride ourselves on our customer service, providing ongoing support and quick responses to ensure that your IT systems are always running smoothly.
										</p>
									</div>
							</div>
								<br></br>
								<br></br>			
							<div className="col-md ">
								<a href="About">
									<img src="../Image/About/whychoose.jpg" className="img-thumbnail"  width="500px;"></img>
								</a>
							</div>
						</div>
					</div>
        </>
	    )
	}
	export default About;