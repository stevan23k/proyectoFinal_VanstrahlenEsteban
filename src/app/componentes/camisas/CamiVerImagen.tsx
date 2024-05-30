import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

export const CamiVerImagen = () =>{
    return(
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">nombre pelicula</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img src="" alt="error" className="maximoTamanoGrande" />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};