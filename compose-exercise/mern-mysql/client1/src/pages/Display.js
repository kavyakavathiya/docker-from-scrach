
import Header from '../components/Header'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import env from "react-dotenv";
// const port_backend =REACT_APP_PORTBACKEND
const port_backend =process.env.REACT_APP_PORTBACKEND


export default function Display(){
    const [customerList, setCustomerList]=useState([])
    // const [deleteCustomer, setdeleteCustomerList]=useState([])
   // const [dcustomerList, setdCustomerList]=useState([])
    let user_id =useState([])
    let duser_id =useState('')
    // let idd = useState('')
    let [idd, setIdd] = useState('')
    const [oneCustomerList, setOneCustomerList]=useState([])
    const [doneCustomerList, setdOneCustomerList]=useState([])
    useEffect(()=>{
        Axios.get('/api/display_details').then((response)=>{
            //console.log(response.data);
            setCustomerList(response.data)
        }
        )
    },[])

    const updateDetails = () =>{
        Axios.post('/api/select_one', {
            user_id: user_id
        }).then((response)=> {
            {customerList.map((val)=>{
                { user_id = val.id }
            })}
            setOneCustomerList(response.data)
            
        });
    };

    if (oneCustomerList != "")
    {
        this.props.history.push('/edit?user_id'+user_id);
    }

    console.log(idd)
    const deleteCustomer = () => {
        Axios.post('/delete/', {
            
            idd: idd
    }).then((response)=>{
            console.log(duser_id);
            
            // setCustomerList(response.data)
        })
        // <-- declare id parameter
        // Axios
        //   .delete('http://localhost:${port_backend}/delete/?id='+id) // <-- remove ;
        //   .then(() => {
        //     // Issue GET request after item deleted to get updated list
        //     // that excludes note of id          
        //     this.props.history.push('http://localhost:${port_backend}/display');
        //   });
      };


    // const deleteDetails = () =>{
    //     Axios.post('http://localhost:${port_backend}/api/select_one', {
    //         user_id: duser_id
    //     }).then((response)=> {
    //         {customerList.map((val)=>{
    //             { user_id = val.id }
    //         })}
    //         setdOneCustomerList(response.data)
            
    //     });
    // };

    // if (doneCustomerList != "")
    // {
    //     this.props.history.push('http://localhost:${port_backend}/delete_one?duser_id'+duser_id);
    // }

    
    // const deleteDetails = () =>{
    //     Axios.post('http://localhost:${port_backend}/api/delete_one', {
    //         duser_id: duser_id
    //     }).then(()=> {
            
    //         this.props.history.push('http://localhost:${port_backend}/display');
    //     });
    // };
    return (
        <>
        <Header />
        <div class="container">
            <br /><br />
            <table class="table table-stripped table-seconday table-bordered">
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Contact
                    </th>
                    <th>
                        City
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Update
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
                {customerList.map((val)=>{
                    return  <tr>
                                <td>
                                    
                                    {val.name}
                                </td>
                                <td>
                                    {val.email}
                                </td>
                                <td>
                                    {val.contact}
                                </td>
                                <td>
                                    {val.city}
                                </td>
                                <td>
                                    {val.age}
                                </td>
                                <td>
                                    
                                        <p class="d-none">
                                        { user_id = val.id }
                                        </p>
                                         
                                    <a href={'/edit?user_id='+user_id} >
                                    <button type="button" class="btn btn-success btn-block gradient-custom-4 text-body" onClick={updateDetails} >Update</button>
                                    </a>
                                </td>
                                <td>
                                    <form>
                                    <p class="d-none">
                                        <input type="text" id="idd" name="idd" value={idd=val.id}/>
                                        </p>
                                    <button type="button" class="btn btn-danger btn-block gradient-custom-4 text-body" onClick={deleteCustomer} >Delete</button>
                                    </form>
                                </td>
                            </tr>
                })}
                   
            </table>
            
    </div>
    </>
    )
}