import React from 'react';
import { Container, Col, Row } from "reactstrap";
import './HomePage.css'; // Import the HomePage.css file

const HomePage = () => {
    return (
        <Container className='sm-3'>
            <Col>
                <Row>
                    <view className="verse"> {/* Use the class 'verse' */}
                        "Take my yoke upon you, and learn of me; <br/>
                        for I am meek and lowly in heart; <br/>
                        and ye shall find rest unto your souls"<br/>
                        Matthew 11:29  
                    </view>
                </Row>
            </Col>
        </Container>
    );
};

export default HomePage;