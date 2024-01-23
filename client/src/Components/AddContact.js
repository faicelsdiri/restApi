import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { add_contact } from "../Redux/action";
import { useDispatch} from 'react-redux'

const AddContact = () => {

  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumbre, setphoneNumbre] = useState();
  const [birthDate, setbirthDate] = useState();
  const dispatch= useDispatch()
  const navigate=useNavigate();

  const ADD =() =>{
  const newContact = {
    fullName,
    email,
    phoneNumbre,
    birthDate,
  };
  dispatch(add_contact(newContact));
  navigate('/');
}
  return (
    <div
      style={{
        
        marginTop: "10px",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><b>Full Name :</b></Form.Label>
        <Form.Control type="text" placeholder="Full Name" onChange={(e)=>{setfullName(e.target.value)}} />
        <br></br>

        <Form.Label><b>Email :</b></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setemail(e.target.value)}}/>
        <br></br>

        <Form.Label><b>Phone Number :</b></Form.Label>
        <Form.Control type="number" placeholder="Phone Number" onChange={(e)=>{setphoneNumbre(e.target.value)}}/>
        <br></br>

        <Form.Label><b>Birth Date :</b></Form.Label>
        <Form.Control type="number" placeholder="BirthDate" onChange={(e)=>{setbirthDate(e.target.value)}}/>

<br></br>
</Form.Group>
<div style={{textAlign: "center"}}
        >
        <Button variant="success" onClick={ADD} style={{margin: "20px"}}>Success</Button >
        <Link to="/">
          <Button variant="danger">Cancel</Button>
        </Link>
      </div>
    </div>
  );
};
export default AddContact;
