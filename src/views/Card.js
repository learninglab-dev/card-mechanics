import React from 'react'
import Tooltip from '../hooks/Tooltip'
import {Modal,Button} from 'react-bootstrap'
import ModalImage from 'react-modal-image'
import Lightbox from "react-image-lightbox";
const downImage ="https://i.redd.it/6esxupxwcf1z.jpg"

const styles={
    image:{
        objectFit: "cover",
        width: "50vw",
        // height: "50vh",
        // objectPosition:"0% 20%",
        // position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        marginBottom: "10pt"
    },
    modal:{
        // opacity: "75%",

    }
}


export default function Card ({data, style,bool,flipped}){
    let tileStyle = style;
    // let image be up or down
    const [show, setShow] = React.useState(false)

    const handleClick=()=>{
        show === true? setShow(false) : setShow(true)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
          setShow(true)
          // setBackgroundImage(data.image)
      }
    const [backgroundImage,setBackgroundImage]=React.useState(null)
    const texttodisplay = {name: data.name, creator: data.by}

    //
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
                    // aria-labelledby="contained-modal-title-vcenter"
                    // className="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered
                    scrollable
                    show={show}
                    onHide={handleClose}
                    contentClassName={'foo-modal-backdrop'}
                    // style={styles.modal}
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
                    {/*</ModalImage>*/}
                </Modal>


            </div>
        );
    } else {
        return (
            <div className="card" style={tileStyle}>
                {/*<Tooltip text={texttodisplay}>*/}
                    <img
                        src={data.image}
                        alt={data.name}
                        style={tileStyle}
                        onClick = {()=>flipped()}
                    />
                {/*</Tooltip>*/}
            </div>
        );
    }


}