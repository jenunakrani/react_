import axios from 'axios';
import React, { useEffect, useState } from "react";

const Form = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [get, setget] = useState([], true);
    const [status, setstatus] = useState(false);

    const [error,seterror]= useState(false);
    useEffect(() => {
        axios.post('http://localhost/jenu_php/api_call/first.php', { name, email, contact })
            .then(function (response) {
                console.log(response.data);
                setget(response.data);
                setstatus(true);
            })
            .catch(function (error) {
                console.log(error);

            });
    }, [])
    const btnhandaler = (e) => {
      
        axios.post('http://localhost/jenu_php/api_call/first.php', { name, email, contact })
            .then(function (response) {
                // window.location.reload(true);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            e.preventDefault();
            if(name.length==0)
            {
                seterror(true)
                return false;
            }
            if(email.length==0)
            {
                seterror(true)
                return false;
            }
            if(contact.length==0)
            {
                seterror(true)
                return false;
            } 
    }
    const handlechangeName = (e) => {
        setname(e.target.value);   
    }
    const handlechangeEmail = (e) => {
        setemail(e.target.value);
    }
    const handlechangeContact = (e) => {
        setcontact(e.target.value);
    }
    if (status) {
        return (
            <>
                <table className='table'>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" onChange={(e) => { handlechangeName(e); }}></input></td>
                        {error && name.length <=0 ?  <label style={{color: "red"}}>enter name </label>: "" }                  
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="email" onChange={(e) => { handlechangeEmail(e); }}></input></td>
                        {error && email.length <=0?  <label style={{color: "red"}}>enter email </label>: "" }
                    </tr>
                    <tr>
                        <td>Contact:</td>
                        <td><input type="text" name="contact" onChange={(e) => { handlechangeContact(e); }}></input></td>
                        {error && contact.length <=0?  <label style={{color: "red"}}>enter contact </label>: "" }
                
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="submit" name="submit" onClick={btnhandaler}></input>
                        </td>
                    </tr>
                </table>
                <form>
                    {/* <table border="2" cellPadding='2' cellSpacing="1">
                        <tr>
                            <th>Id </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                        {
                            get.map((e) => {
                                return (
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.contact}</td>

                                    </tr>
                                )
                            })
                        }
                    </table> */}
                </form>
            </>

        )
    }
}
export default Form;