import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

const Footer = () => {
    const playerContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    return (
        <footer className='site-footer'> 
                  <div style={playerContainerStyle}>
            <ReactPlayer url="https://soundcloud.com/kavsko/" />
          </div>
            <Container>
                <Row>
                    <Col xs={{ size: 7 }} sm='6' className='mx-auto text-white'>
                       <h5>© Copyright 2023</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    )}

export default Footer;