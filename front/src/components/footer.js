import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../images/logo.png'
import './footer.css'
function Footer() {
    return <>
        <Container fluid className='footer'>
            <Container>     
            <Row>
                {/* Colum 01 */}
                <Col xs={12} md={6} lg={3} className="footerColumn">
                        <h4>News</h4>
                    <ListGroup variant="flush" >
                        <ListGroup.Item>Press Center</ListGroup.Item>
                        <ListGroup.Item>Service Stories</ListGroup.Item>
                        <ListGroup.Item>The Lions Blog</ListGroup.Item>
                        <ListGroup.Item>LION Magazine</ListGroup.Item>
                    </ListGroup>
                </Col>
                {/* Colum 01 */}
                {/* Colum 02 */}
                <Col xs={12} md={6} lg={3} className="footerColumn">
                    <h4>Media</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Video Center</ListGroup.Item>
                        <ListGroup.Item>Logos</ListGroup.Item>
                        <ListGroup.Item>Brand Guidelines</ListGroup.Item>
                    </ListGroup>
                </Col>
                {/* Colum 02 */}
                {/* Colum 03 */}
                <Col xs={12} md={6} lg={3} className="footerColumn">
                    <h4>Connect</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Careers</ListGroup.Item>
                        <ListGroup.Item>Contact LCI</ListGroup.Item>
                        <ListGroup.Item>Contact LCIF</ListGroup.Item>
                        <ListGroup.Item>Your Privacy</ListGroup.Item>
                    </ListGroup>
                
                </Col>
                {/* Colum 03 */}               
                {/* Colum 04 */}
                <Col xs={12} md={6} lg={3} className="footerColumn">
                <ListGroup horizontal>
                    <ListGroup.Item><FacebookIcon /></ListGroup.Item>
                    <ListGroup.Item><InstagramIcon/></ListGroup.Item>
                    <ListGroup.Item><LinkedInIcon/></ListGroup.Item>
                    <ListGroup.Item><TwitterIcon/></ListGroup.Item>
                    <ListGroup.Item><YouTubeIcon/></ListGroup.Item>
                </ListGroup>

                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                <img
                                    src={Logo}
                                    width="50"
                                    height="50"
                                    alt="Lions Club of Colombo Centennial logo"
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Lions Club of Colombo Centennial
                            </ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>        
                    <ListGroup.Item>Address
                                <br />
                                Address 
                                <br />
                                Address 

                    </ListGroup.Item>
                    <ListGroup.Item>+94 111 111 111</ListGroup.Item>
                </ListGroup>        
                </Col>
                {/* Colum 04 */}

            </Row>        
            <hr />
            <Row className='col-sm text-center'>
                <p>&copy;{ new Date().getFullYear()} LCCC | Privacy</p>
            </Row>
            </Container>
    </Container>
    </>
}

export default Footer