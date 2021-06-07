import React from 'react'
import Tooltip from '../hooks/Tooltip'
import {Modal,Button,Container,Row,Col} from 'react-bootstrap'
import downImage from "../images/downImageSmall.jpg"

const styles={
    modal_image:{
        objectFit: "cover",
        // width: "50vw",
        width: "50vw",
        height: "80vh",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    }}


export default function Card ({data, style,bool,flippedStatus,onClick}){
    let tileStyle = style;
    let showImage = flippedStatus === true ? data.image : downImage
    // let image be up or down
    const [show, setShow] = React.useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => {
          setShow(true)
      }

    const texttodisplay = {name: data.name, creator: data.creator}


    // there's definitely a better way to do this with state, but for now....
    if (bool===true){
        return (
            <div className="card" style={tileStyle}>
                <Tooltip text={texttodisplay}>
                    <img
                        src={data.image} //replace with url from firebase image useEffect
                        alt={data.name}
                        style={tileStyle}
                        onClick={handleShow}
                    />
                </Tooltip>
                <Modal
                    // size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered
                    scrollable
                    show={show}
                    onHide={handleClose}
                    // contentClassName={'foo-modal-backdrop'}
                >
                    {/*<Modal.Header  closeButton>*/}
                    {/*    /!*<Modal.Title>*!/*/}
                    {/*    /!*    <h2>{data.name}</h2>*!/*/}
                    {/*    /!*    <h4 className={"header-sm"}>*!/*/}
                    {/*    /!*        created by {data.by}, {data.year}*!/*/}
                    {/*    /!*    </h4>*!/*/}
                    {/*    /!*</Modal.Title>*!/*/}
                    {/*</Modal.Header>*/}
                    <Modal.Body>
                        <Container fluid>
                            <Row>
                                <Col md={7}>
                                    <Row>
                                        <img
                                            src={data.image}
                                            alt={data.name}
                                            style={styles.modal_image}
                                        />
                                    </Row>
                                </Col>
                                <Col md={5}>
                                    <Row>
                                        <Modal.Title>
                                            <h2>{data.name}</h2>
                                            <h4>created by {data.creator}, {data.year}</h4>
                                        </Modal.Title>
                                    </Row>
                                    <Row className={"monster-mythos"}>
                                        {data.mythos}
                                    </Row>

                                </Col>
                            </Row>

                        </Container>
                        {/*<Modal.Footer>*/}
                        {/*    <Button variant="secondary" onClick={handleClose}>*/}
                        {/*        Close*/}
                        {/*    </Button>*/}
                        {/*</Modal.Footer>*/}
                    </Modal.Body>

                </Modal>


            </div>
        );
    } else {
        return (
            <div className="card" style={tileStyle}>
                <img
                    src={showImage}
                    alt={data.name}
                    style={tileStyle}
                    onClick ={onClick}
                />
            </div>
        );
    }


}