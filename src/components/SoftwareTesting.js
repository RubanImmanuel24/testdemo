import React, { useEffect } from 'react';
import './styles/home.css'

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
                            <p className='homeAboutIntroContent'><h2>Software Testing </h2></p>
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
                       
                            <img src="../Image/Services/softwaretesting.jpg" className="img-fluid " width="800px; "></img>
                        
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col"><h3 className='devopscontent'>Our comprehensive testing service provides</h3>
                        <div className='homeAboutIntroContent'> 
                        <ol>
                        <li>	Functional Testing: Verifying that your software functions as expected and meets all specified requirements, ensuring that all features work correctly.</li>
                        <li>	Regression Testing: Testing existing functionalities to ensure that new updates or changes haven’t introduced any defects or issues.</li>
                        <li>	Performance Testing: Assessing your software’s performance under various conditions to identify potential bottlenecks and ensure scalability and responsiveness.</li>
                        <li>	Security Testing: Conducting thorough security assessments to identify and address vulnerabilities, ensuring your software is protected against threats and breaches.</li>
                        <li>	User Experience (UX) Testing: Evaluating the usability and overall user experience to ensure your software is intuitive and meets user expectations.</li>
                        <li>	Automated Testing: Utilizing automation tools to streamline repetitive test cases, increase test coverage, and accelerate the testing process.</li>
                        <li>	Compatibility Testing: Ensuring that your software performs consistently across different devices, browsers, and operating systems.</li>
    </ol>
                            
                        </div>
                    </div>
             
                </div>
            </div>
        </>
    )
}

export default SoftwareTesting;