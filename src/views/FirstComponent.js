import React from "react";
import {Container, Row, Col, Media} from 'react-bootstrap'
import mainImage from "../images/4.jpg";

const styles={
    container:{
        margin: "2vw"
    },
    about:{
        color:"rgba(26,0,161,0)"
    },
    image:{
        objectFit:"cover",
        objectPosition:"0% 50%",
        // marginLeft: "auto",
        // marginRight: "auto",
        display: "flex",
        marginBottom: "2vw",
        width:"100vw",
        maxWidth: "100vw",
        height:"40vh"

    }
}

export default () => {
    return (
        <div className="component first-component">
            <Container fluid >
                <Row>
                    <Media>
                        <img

                            style={styles.image}
                            src={mainImage}
                            alt={"Top view image of a boat on the water with a monster dwelling below"}
                        />
                    </Media>
                </Row>



                <Row className={"justify-content-center center-grid"}>
                    <Col sm={4}>
                        <h1
                            className={'header-class justify-content-left vertical-center highlightText'}
                        >Sea Monsters Throughout the Ages: Fables, Films, & Facts </h1>
                    </Col>
                    <Col sm={7}>
                        <p className={'justify-content-left'}> There have always been tales of sea monsters. For as long as we humans have ventured into the ocean, our imaginations have conjured images of serpents, krakens, leviathans, and other creatures, all of whom seem bent on the destruction of those who dare set foot into the sea. Humankinds conviction that sea monsters are real is so powerful that even today rumors abound of sea monsters lurking in the depths. Indeed, every major religioneastern and westernfeatures sea monsters. Are these declarations true? Do giants roam the deep sea? Did the explorers of centuries ago see creatures from their small wooden boats that we do not see today? During this course we explore sea monsters through a social, spiritual, literary, and scientific lens. We study the sea monsters that flourish on ancient maps to understand the minds of sixteenth century scholars. We examine the bodies of real sea monsters, and consider the world in which such grotesque creatures might evolve. We read tales of creatures from classic and contemporary literature. Most importantly, we develop a better understanding of how humans perceive the world, and how our consciousness can simultaneously embrace our wildest dreams and cower from our greatest fears. Sea monsters, both real and imagined, tell us much about life in the deep sea, and even more about humankind.</p>
                        <p className={'justify-content-left'}> As part of this course, students design their own sea monster and create a mythos for it, drawing on all that they learned from the course and pulling inspiration from a number of cultures and their monsters. </p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};