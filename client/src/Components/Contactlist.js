import { get_contact } from "../Redux/action";
 import Contactcard from "./Contactcard"
 import {useSelector, useDispatch} from 'react-redux'
 import React, {useEffect} from 'react';

 function ContactList() {
    const dispatch= useDispatch()
    const contacts= useSelector((state)=>state.contacts.data)
    useEffect(()=>{
        dispatch(get_contact())
    },[])

    contacts &&
    console.log(contacts);  
      return(
   <>
   <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"  }} >

   {
    contacts && 
    contacts.map((elm)=> <Contactcard elm = {elm}/>)
   }
{/* {contacts && 
        contacts.map((elm)=> <Contactcard elm = {elm}/>)
   // contacts.map((elm)=> <ContactList elm = {elm}/>)
    }
     */}
     </div>
    </>
    
    )}
 export default ContactList;