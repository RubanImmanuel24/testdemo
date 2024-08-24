import React,  { useEffect }  from 'react';
import {NavLink } from 'react-router-dom';
 import './styles/contact.css';
 import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter
  } from 'reactstrap';

 function Contact() {

	useEffect(() => {
		document.documentElement.scrollTop = 0;
	});
	return (
		<>
        	<div className='row homeAboutIntroContentTitle justify-content-center '>
  				<div className="col " >
					<Card className="border border-warning " style={{height: '7rem'}}>
						<CardTitle className="  contactTitleFontFamily contactTitleFontFamilyText "><h3>Address</h3></CardTitle>
							<CardBody>
								<CardText className="cardFontFamily" > 
                                    <div className='Contact-text'>    
                                        PKM Complex,3rd Floor,Opposite to old Bus stand,Perundurai,Tamil Nadu-638052</div>
								</CardText>
							</CardBody>
					</Card>
				</div>
                                        <ul></ul>
                        <div className="col " >
					        <Card className="border border-warning " style={{height: '7rem'}}>
							   	<CardTitle className="  contactTitleFontFamily contactTitleFontFamilyText "><h3>Contact Us</h3>
								</CardTitle>
										<CardBody>
											<CardText className="cardFontFamily" > 
                                                 <div className='Contact-Number'>
                                                 9597863432 <br></br>
                                                 9384163432</div> 
											</CardText>
										</CardBody>
                                                    
	
							</Card>
					    </div>
										<ul></ul>
                          <div className="col " >
					          	<Card className="border border-warning " style={{height: '7rem'}}>
							   		<CardTitle className="  contactTitleFontFamily contactTitleFontFamilyText "><h3>Email</h3></CardTitle>
													<CardBody>
														<CardText className="cardFontFamily" > 
                                                            <div className='Contact-Number'>
                                                              inoutteksolutions@gmail.com</div> </CardText>
													</CardBody>
                                </Card>
						 </div>
          </div>
        </>
        )
    }
    
    export default Contact;