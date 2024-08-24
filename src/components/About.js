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
												In the rapidly evolving digital landscape, efficient and reliable software delivery is paramount. InOutTek Solutions offers DevOps as a Service (DaaS) to empower businesses with the tools, practices, and expertise necessary to streamline their software development lifecycle. By integrating development and operations, we enhance collaboration, improve deployment efficiency, and ensure continuous delivery of high-quality software
										</p>
									</div>
							</div>
								<br></br>
								<br></br>		
						</div>
		</div>	
        </>
	    )
	}
	export default About;