/** @format */

import { Modal } from "react-bootstrap";

function ThankYouModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="thankYouModal">
            <img src="./Images/94.png" alt='' />

            
         </div>
      </Modal.Body>
    </Modal>
  );
}

export default ThankYouModal;
