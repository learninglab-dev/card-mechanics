import React from 'react'
import '../style.css'
import {Container, Row, Col,Media} from 'react-bootstrap'
import mainImage from '../images/4.jpg'
import pg from '../images/PGirguis.jpg'

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
        display: "block",
        marginBottom: "2vw"


    }
}

export default function About(){
    return (
        <div>
            <Media>
                <img
                    width={"100%"}
                    height={"400ch"}
                    style={styles.image}
                    src={mainImage}
                    alt={"Top view image of a boat on the water with a monster dwelling below"}
                />
            </Media>
            <Container fluid >

                <Row className={"justify-content-center bmargin-2"}>
                    <Col sm={4}>
                        <h1 className={'header-class justify-content-left vertical-center highlightText'}>Sea Monsters Throughout the Ages: Fables, Films, and Facts </h1>
                    </Col>
                    <Col sm={7}>
                        <p className={'justify-content-left'}> There have always been tales of sea monsters. For as long as we humans have ventured into the ocean, our imaginations have conjured images of serpents, krakens, leviathans, and other creatures, all of whom seem bent on the destruction of those who dare set foot into the sea. Humankinds conviction that sea monsters are real is so powerful that even today rumors abound of sea monsters lurking in the depths. Indeed, every major religioneastern and westernfeatures sea monsters. Are these declarations true? Do giants roam the deep sea? Did the explorers of centuries ago see creatures from their small wooden boats that we do not see today? During this course we explore sea monsters through a social, spiritual, literary, and scientific lens. We study the sea monsters that flourish on ancient maps to understand the minds of sixteenth century scholars. We examine the bodies of real sea monsters, and consider the world in which such grotesque creatures might evolve. We read tales of creatures from classic and contemporary literature. Most importantly, we develop a better understanding of how humans perceive the world, and how our consciousness can simultaneously embrace our wildest dreams and cower from our greatest fears. Sea monsters, both real and imagined, tell us much about life in the deep sea, and even more about humankind.</p>
                        <p className={'justify-content-left'}> As part of this course, students design their own sea monster and create a mythos for it, drawing on all that they learned from the course and pulling inspiration from a number of cultures and their monsters. </p>

                    </Col>
                </Row>
                <Row className={"justify-content-center bmargin-2"}>
                    <Col md={5} className={"justify-content-center infoPane"}>
                        <Row className={"justify-content-center "}>
                            <h2> Instructor Info</h2>
                        </Row>
                        <Row>
                                <img
                                    className={"center"}
                                    src={pg}
                                    alt={"Illustrated headshot of Dr. Peter Girguis"}
                                    />
                        </Row>
                        <Row>
                            <h4><a className={'justify-content-center'} href={"https://online-learning.harvard.edu/course/sea-monsters-throughout-ages-fables-films-and-facts?delta=0"}>Peter Girguis</a></h4>
                            <p> Professor of Organismic and Evolutionary Biology, Harvard University </p>
                        </Row>
                    </Col>
                    <Col sm={1}>

                    </Col>
                    <Col md={5} className={"justify-content-center infoPane"}>
                        <Row>
                            <h2 > Course Info</h2>
                        </Row>
                        <Row>
                            <p> Links</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/*<h1 className={'header-md center-text'}>About HUMA-E103 Sea Monsters</h1>*/}

            </div>
    )
}