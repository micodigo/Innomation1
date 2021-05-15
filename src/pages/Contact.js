import React from 'react';
import './Contact.scss';
import { useFormik } from "formik";
import Header from '../components/Header';

export default function Contact() {
    const formik=useFormik({
        initialValues: {name:'', contact:'', email:'', message: ''},
        onSubmit: values=>{
            console.log(values.name)
        }
    });
    return(
        <div>
            <Header />
            <div><h1>Write A Message</h1></div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Your Name </label>
                <input name="name" type="text" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} />
                <br/>
                <label htmlFor='contact'>Your Phone: </label>
                <input name='contact' type="text" placeholder="Phone" onChange={formik.handleChange} value={formik.values.contact} />
                <br/>
                <label htmlFor='email'>Your Email: </label>
                <input name='email' type="text" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                <br/>
                <label htmlFor='message'>Your Message: </label>
                <input name='message' type="text" placeholder="Message" onChange={formik.handleChange} value={formik.values.message} />
                <br/>
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}