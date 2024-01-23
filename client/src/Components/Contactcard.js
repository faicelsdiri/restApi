import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { deletecontact } from "../Redux/action";
import EditContact from "./EditContact";



function Contactcard({elm}) {
const dispatch =useDispatch();

const deleteC =() =>{
    const confirmdelte = window.confirm()
    if (confirmdelte) {
        dispatch(deletecontact(elm._id))
    }

}


  return (
    <Card
    style={{
      textAlign: "center",
      marginTop: "10px",
      marginLeft: "20px",
      width: "220px",
      height: "300px",
      backgroundColor: "transparent",
      borderColor: "black",
      borderWidth: "4px",
      borderRadius: "30px", // Adjust the value as needed
    }}
  >
    
    <Card.Body>
      <Card.Title> {elm.fullName }</Card.Title>
      <Card.Text> {elm.email } </Card.Text>
      <Card.Text> {elm.birthDate } </Card.Text>
      <Card.Text> { elm.phoneNumbre} </Card.Text>
      
    </Card.Body>
    <Card.Footer
     
    >
        <div  style={{display: "flex", margin :"5px"}} >
        <Button variant="outline-danger" onClick={deleteC} style={{width: "100px",      height: "38px", marginTop:"10px"}}>Delete</Button>
        
        <EditContact elm={elm} />
        </div>
    </Card.Footer>
  </Card>
  )}
export default Contactcard;