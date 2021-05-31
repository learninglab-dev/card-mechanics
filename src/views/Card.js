import React from 'react'
import Tooltip from '../hooks/Tooltip'
import {Modal,Button} from 'react-bootstrap'
import ModalImage from 'react-modal-image'
import Lightbox from "react-image-lightbox";
import downImage from "../images/downImageSmall.jpg"

const styles={
    image:{
        objectFit: "cover",
        width: "50vw",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        marginBottom: "10pt"
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

    const texttodisplay = {name: data.name, creator: data.by}


    // there's definitely a better way to do this with state, but for now....
    if (bool===true){
        return (
            <div className="card" style={tileStyle}>
                <Tooltip text={texttodisplay}>
                    <img
                        src={data.image}
                        alt={data.name}
                        style={tileStyle}
                        onClick={handleShow}
                    />
                </Tooltip>
                <Modal
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    // className="modal-90w"
                    // aria-labelledby="example-custom-modal-styling-title"
                    centered
                    scrollable
                    show={show}
                    onHide={handleClose}
                    contentClassName={'foo-modal-backdrop'}
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
                        <img
                            src={data.image}
                            alt={data.name}
                            style={styles.image}
                        />
                        {data.mythos}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
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