import React, { useEffect } from 'react';
import './styles/home.css'
import { NavLink } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

function SoftwareTesting() {

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    });
    return (
        <>
            <div className="Container-fulid col-12">
                <div className="row bg-lightBrown ">
                    <div className="col-md ">
                        <div className='d-flex'>
                            <p className='homeAboutIntroContent'><h3>Software Testing </h3></p>
                        </div>
                        <div className='d-flex'>
                            <p className='homeAboutIntroContent'>
                                Our Software Testing services are designed to ensure that your software applications meet the highest standards of quality, performance, and reliability. By applying a comprehensive approach to testing, we help identify and resolve issues before they reach your end users, ensuring a seamless and satisfying user experience.
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-md ">
                        <NavLink to="/software-testing" >
                            <img src="../Image/Services/softwaretesting.jpg" className="img-fluid " width="800px; "></img>
                        </NavLink>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-6"><h3 className='devopscontent'>Key Features</h3>
                        <div className='homeAboutIntroContent'>  
                            <h5>1.	Functional Testing</h5>
                            <p>     	Requirement Analysis: Verify that software functionalities meet specified requirements and business objectives.</p>
                            <p>Test Case Design: Develop detailed test cases to assess individual functionalities and overall system behavior</p>
                            <p>Execution and Reporting: Perform thorough testing and provide detailed reports on test results, including defects and issues.</p>
                            <h5>2.	Non-Functional Testing </h5>
                            <p>     	Performance Testing: Evaluate software performance under various conditions to ensure it meets speed, scalability, and reliability standards.</p>
                            <p>  Security Testing: Identify vulnerabilities and ensure the software is protected against security threats and data breaches.</p>
                            <p>Usability Testing: Assess the software’s user interface and overall user experience to ensure it is intuitive and user-friendly.</p>

                            <h5>	3.	Automation Testing</h5>
                            <p>Test Automation Strategy: Develop and implement automation strategies to streamline repetitive testing processes and increase efficiency.</p>
                            <p> Script Development: Create and maintain automated test scripts to cover various testing scenarios and ensure consistent results.</p>
                            <p> Continuous Integration: Integrate automated tests into CI/CD pipelines to enable early detection of issues and support continuous delivery. </p>

                            <h5>	4.	Manual Testing </h5>
                            <p> Exploratory Testing: Conduct ad-hoc testing to uncover defects that may not be captured by automated tests.</p>
                            <p> Regression Testing: Perform tests to ensure that recent changes or enhancements do not adversely affect existing functionality. </p>

                            <h5>	5. Compatibility Testing </h5>
                            <p>Cross-Browser Testing: Verify that software performs correctly across different web browsers and versions.</p>
                            <p>  Device Testing: Ensure compatibility with various devices and operating systems to guarantee a consistent user experience.</p>
                        </div>
                    </div>
                    <div className="col-6"><h3 className='devopscontent'>Benefits</h3>
                        <div className='homeAboutIntroContent'>
                            <ul>
                                    <li> Enhanced Quality: Improve the overall quality of your software by identifying and addressing issues early in the development process.</li>	   
                                    <li> Reduced Risk: Minimize the risk of defects and failures by implementing rigorous testing practices. </li> 
                                    <li> Improved User Experience: Deliver a seamless and user-friendly experience by ensuring your software meets usability and performance standards.</li>       
                                    <li> Cost Efficiency: Reduce costs associated with post-release defects and customer complaints through proactive testing.</li>      
                                    <li> Faster Time to Market: Accelerate the release of high-quality software by integrating testing into the development lifecycle.</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoftwareTesting;