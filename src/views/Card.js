import React from 'react'
import Tooltip from '../hooks/Tooltip'
import {Modal,Button} from 'react-bootstrap'

const downImage ="https://i.redd.it/6esxupxwcf1z.jpg"

export default function Card ({data, style,bool,flipped}){
    let tileStyle = style;
    // let image be up or down
    const [show, setShow] = React.useState(false)
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
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable
                    show={show}
                    onHide={handleClose}
                    dialogClassName="container"
                    background={downImage}
                >
                    <Modal.Header closeButton>
                        <Modal.Title><h2>{data.name}</h2><h4 className={"header-sm"}>created by {data.by}</h4></Modal.Title>
                        {/*<Modal.Title style={"fontSize: 15pt"}>{data.by}</Modal.Title>*/}
                    </Modal.Header>
                    <Modal.Body>{data.mythos}</Modal.Body>
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