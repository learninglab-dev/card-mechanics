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

                <Row className={"justify-content-center"}>
                    <Col sm={4}>
                        <h1 className={'header-class justify-content-left vertical-center'}>Sea Monsters Throughout the Ages: Fables, Films, and Facts </h1>
                    </Col>
                    <Col sm={6}>
                        <p className={'justify-content-left'}> There have always been tales of sea monsters. For as long as we humans have ventured into the ocean, our imaginations have conjured images of serpents, krakens, leviathans, and other creatures, all of whom seem bent on the destruction of those who dare set foot into the sea. Humankinds conviction that sea monsters are real is so powerful that even today rumors abound of sea monsters lurking in the depths. Indeed, every major religioneastern and westernfeatures sea monsters. Are these declarations true? Do giants roam the deep sea? Did the explorers of centuries ago see creatures from their small wooden boats that we do not see today? During this course we explore sea monsters through a social, spiritual, literary, and scientific lens. We study the sea monsters that flourish on ancient maps to understand the minds of sixteenth century scholars. We examine the bodies of real sea monsters, and consider the world in which such grotesque creatures might evolve. We read tales of creatures from classic and contemporary literature. Most importantly, we develop a better understanding of how humans perceive the world, and how our consciousness can simultaneously embrace our wildest dreams and cower from our greatest fears. Sea monsters, both real and imagined, tell us much about life in the deep sea, and even more about humankind.</p>
                        <p className={'justify-content-left'}> As part of this course, students design their own sea monster and create a mythos for it, drawing on all that they learned from the course and pulling inspiration from a number of cultures and their monsters. </p>

                    </Col>
                </Row>
                <Row className={"justify-content-center space-between"}>
                    <Col md={4} className={"justify-content-center"}>
                        <Row className={"justify-content-center"}>>
                            <h2> Instructor Info</h2>
                        </Row>
                        <Row>
                                <img
                                    width={"50%"}
                                    height={"50%"}
                                    src={pg}
                                    alt={"Illustrated headshot of Dr. Peter Girguis"}
                                    />
                        </Row>
                        <Row>
                            <p> Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!</p>
                        </Row>
                    </Col>
                    <Col md={4} className={"justify-content-center"}>
                        <Row>
                            <h2> Course Info</h2>
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