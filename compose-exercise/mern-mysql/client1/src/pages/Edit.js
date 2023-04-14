
import Header from '../components/Header'
import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';


import Axios from 'axios';
// import env from 
import env from "react-dotenv";
// const port_backend =REACT_APP_PORTBACKEND
const port_backend =process.env.REACT_APP_PORTBACKEND
export default function Edit(){
    
    let uid = useState('')
    let name = useState('')
    let email = useState('')
    let contact = useState('')
    let age = useState('')
    let city= useState('')
    const [customerList, setCustomerList]=useState([])
    //const searchParams = useSearchParams();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const submitDetails = () =>{
        Axios.put('/api/update_one', {
            uid: uid, name: name, email: email, contact: contact, city: city, age: age
        }).then(()=> {
            window.location.replace('/display');
        });
    };
    
    useEffect(()=>{
        Axios.post('/api/select_one', {
            user_id : searchParams.get("user_id")
        }).then((response)=> {
            setCustomerList(response.data)
        });
    },[])
    

    
    
    return (
        <>
        <Header />

        <div class="container">
            <br /><br />
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Edit Customer Details</h2>
                                    {customerList.map((val)=>{
                                    return <form>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="name">Name</label>
                                       <span class="d-none">
                                        {uid=val.id}
                                        {name=val.name}
                                        {email=val.email}
                                        {contact=val.contact}
                                        {city=val.city}
                                        {age=val.age}
                                        </span>
                                        <input type="text" id="name" defaultValue={val.name} class="form-control form-control-lg" name="name" onChange={(e)=>{
                                            name=e.target.value
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="email">Email</label>
                                        

                                        <input type="email" id="email" defaultValue={val.email} class="form-control form-control-lg" name="email" onChange={(e)=>{
                                            email=e.target.value
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="contact">Mobile No.</label>
                                        <input type="text" id="contact" defaultValue={val.contact} class="form-control form-control-lg" name="contact" onChange={(e)=>{
                                            contact=e.target.value
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="city">City</label>
                                        <input type="text" id="city" defaultValue={val.city} class="form-control form-control-lg" name="city" onChange={(e)=>{
                                            city=e.target.value
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="age">Age</label>
                                        <input type="number" id="age" defaultValue={val.age} class="form-control form-control-lg" name="age" onChange={(e)=>{
                                            age=e.target.value
                                        }} />

                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body" onClick={submitDetails}>Save Details</button>
                                    </div>
                                </form>})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}