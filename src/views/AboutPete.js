import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import pg from "../images/PGirguis.jpg";

const styles={
    image:{
        width: "30vw"
    }
}

export default () => {
    return (
        <div className="component second-component ">
            <Container fluid>
                <Row className={"bmargin-2 center-grid"}>
                    <Col className={"center-text infoPane"}>
                        {/*<Row className={"justify-content-center "}>*/}
                        {/*    <h2> Instructor Info</h2>*/}
                        {/*</Row>*/}
                        <Row>
                            <img
                                className={"center"}
                                src={pg}
                                alt={"Illustrated headshot of Dr. Peter Girguis"}
                                style={styles.image}
                            />
                        </Row>
                        <Row>
                            {/*<h4><a className={'center-text'} href={"https://online-learning.harvard.edu/course/sea-monsters-throughout-ages-fables-films-and-facts?delta=0"}>Peter Girguis</a></h4>*/}
                            <p className={"center"}> <a href={"https://girguislab.oeb.harvard.edu/people/peter-girguis"} alt={"Link to Pete Girguis' homepage"}>Dr. Peter Girguis</a> is a Professor of Organismic and Evolutionary Biology, Harvard University, where he runs a lab researching most-things deep-sea-related. He has taught Sea Monsters through Harvard University Extension School and as a freshman colloquium through Harvard College.  </p>
                        </Row>
                    </Col>
                    {/*<Col sm={1}>*/}

                    {/*</Col>*/}
                    {/*<Col md={5} className={"justify-content-center infoPane"}>*/}
                    {/*    <Row>*/}
                    {/*        <h2 > Course Info</h2>*/}
                    {/*    </Row>*/}
                    {/*    <Row>*/}
                    {/*        <p> Links</p>*/}
                    {/*    </Row>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </div>
    );
};