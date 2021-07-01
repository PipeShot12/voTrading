import { useState } from "react";
import {Button, Modal} from "react-bootstrap"

export default function ModalAddress({styles}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className={styles} style={{color:"black",border:"none"}}>
            Visítanos (Click)
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-secondary">Visítanos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3 className="text-center text-secondary">Dirección</h3>
                    <p className="text-secondary">Calle 23 #13-80</p>
                    <p className="text-secondary">Bogotá D. C.</p>
                    <p className="text-primary">E-mail: master@votrading.com.co</p>
                    <p className="font-weight-bold text-primary">+57 (310) 228 5775</p>
                    <p className="font-weight-bold text-primary">Max Garzón</p>
                    <p className="font-weight-bold text-success">+57 (322) 307 4029</p>
                    <p className="font-weight-bold text-success">Pipe Hernández</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose} >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
