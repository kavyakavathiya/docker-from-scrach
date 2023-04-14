
import Header from '../components/Header'
import React, { useState } from 'react';
import Axios from 'axios';
const env = require('react-dotenv')
const port_backend =process.env.REACT_APP_PORTBACKEND


export default function Add(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const submitDetails = () =>{
        Axios.post('/api/add_details', {
            name: name, email: email, contact: contact, city: city, age: age
        }).then(()=> {
            window.location.replace('/display');
            //this.props.history.push(':port_backend}/display');
        });
    };
    
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
                                    <h2 class="text-uppercase text-center mb-5">Add an Customer</h2>
                                <form>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="name">Name</label>
                                        <input type="text" id="name" class="form-control form-control-lg" name="name" onChange={(e)=>{
                                            setName(e.target.value)
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="email">Email</label>
                                        <input type="email" id="email" class="form-control form-control-lg" name="email" onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="contact">Mobile No.</label>
                                        <input type="text" id="contact" class="form-control form-control-lg" name="contact" onChange={(e)=>{
                                            setContact(e.target.value)
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="city">City</label>
                                        <input type="text" id="city" class="form-control form-control-lg" name="city" onChange={(e)=>{
                                            setCity(e.target.value)
                                        }} />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="age">Age</label>
                                        <input type="number" id="age" class="form-control form-control-lg" name="age" onChange={(e)=>{
                                            setAge(e.target.value)
                                        }} />

                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body" onClick={submitDetails}>Save Details</button>
                                    </div>
                                </form>
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