import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { update } from "../Redux/action";

function EditContact({ elm }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [fullName, setfullName] = useState(elm.fullName);
  const [email, setemail] = useState(elm.email);
  const [phoneNumbre, setphoneNumbre] = useState(elm.phoneNumbre);
  const [birthDate, setbirthDate] = useState(elm.birthDate);
  const dispatch = useDispatch();
  const updatec = () => {
    const updatedcontact = {
      fullName,
      email,
      phoneNumbre,
      birthDate,
    };
    dispatch(update(elm._id, updatedcontact));
    alert("Contact updated");
   handleClose()
  };

  
  return (
    <div
      style={{
        marginTop: "10px",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Button variant="outline-success" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <b>Full Name :</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setfullName(e.target.value);
            }}
            value={fullName}
          />
          <br></br>

          <Form.Label>
            <b>Email :</b>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />
          <br></br>

          <Form.Label>
            <b>Phone Number :</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            onChange={(e) => {
              setphoneNumbre(e.target.value);
            }}
            value={phoneNumbre}
          />
          <br></br>

          <Form.Label>
            <b>Birth Date :</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="BirthDate"
            onChange={(e) => {
              setbirthDate(e.target.value);
            }}
            value={birthDate}
          />

          <br></br>
        </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={updatec}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>







      {/* <Modal isOpen={modalIsOpen}>
        <h1>Update Contact </h1>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <b>Full Name :</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setfullName(e.target.value);
            }}
            value={fullName}
          />
          <br></br>

          <Form.Label>
            <b>Email :</b>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />
          <br></br>

          <Form.Label>
            <b>Phone Number :</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            onChange={(e) => {
              setphoneNumbre(e.target.value);
            }}
            value={phoneNumbre}
          />
          <br></br>

          <Form.Label>
            <b>Birth Date :</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="BirthDate"
            onChange={(e) => {
              setbirthDate(e.target.value);
            }}
            value={birthDate}
          />

          <br></br>
        </Form.Group>

        <Button variant="outline-success" onClick={updatec}>
          Update
        </Button>
        <Button variant="outline-danger" onClick={closeModal}>
          close
        </Button>
      </Modal> */}
    </div>
  );
}

export default EditContact;
