import { GET_CONTACTS } from "./actionType";
import axios from "axios"

export const get_contact = () => (dispatch)=> {
axios.get("/contact/getcontacts")
.then((res) => dispatch({type : GET_CONTACTS, payload:res }))
.catch((err) => console.error(err))
    
}
export const add_contact = (newContact) => (dispatch)=> {
    axios.post("/contact/addcontact",newContact)
    .then((res) => dispatch(get_contact()))
    .catch((err) => console.error(err))
        
    }

    export const deletecontact = (idcontact) => (dispatch)=> {
        axios.delete(`/contact//deletecontact/${idcontact}`)
        .then((res) => dispatch(get_contact()))
        .catch((err) => console.error(err))
        }

        export const update = (idcontact,updetedcontact) => (dispatch)=> {
            axios.put(`/contact/updatecontact/${idcontact}`,updetedcontact)
            .then((res) => dispatch(get_contact()))
            .catch((err) => console.error(err))
                
            }