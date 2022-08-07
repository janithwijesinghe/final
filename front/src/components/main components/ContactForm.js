import { useState,useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import img from '../../images/form.png'
import './ContactForm.css'


function ContactForm() {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [validated, setValidated] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const formValues = { fName: fName, lName: lName, email: email, message: message }
    // console.log(formValues)
    // console.log(formErrors)
    const submitDetails = (e) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        setFormErrors(validate(formValues))
        setValidated(true)

        setIsSubmit(true)
console.log(Object.keys(formErrors).length)
        if (Object.keys(formErrors).length === 0 && isSubmit) {  
            
            Axios.post('http://localhost:5000/api/insertreplies', {
                fName: fName,
                lName: lName,
                email: email,
                message: message
            }).then(() => {
                alert('Successfully Inserted!')
            }).catch((error) => {
    console.log(error);
})
        }


    }
        useEffect(() => {
            console.log(formErrors);
            console.log(isSubmit)
            if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(fName,lName,email,message);
            }
        }, [formErrors])
      const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.fName) {
            errors.username = "First Name is required!";
            }
            if (!values.lName) {
            errors.username = "Last Name is required!";
            }
            if (!values.email) {
            errors.email = "Email is required!";
            } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
            }
            if (!values.message) {
            errors.password = "Please enter your feedback";
            } 
            return errors;
        }
    return <>
<div class="d-flex justify-content-center">
                <img 
                        src={img} 
                        alt="formImage" 
                        height="344px"
                    className='formImage' />
                <Form noValidate validated={validated} onSubmit={submitDetails} className='p-3'>
                    <Row>
                    <Col lg={6}>
                    <Form.Group className="mb-5">
                            <Form.Control
                                required className='borderEffect' type="text" placeholder="First Name" onChange={(e) => {
                        setFName(e.target.value)
                                }} />
                         <Form.Control.Feedback type="invalid">
                            Please provide First Name.
                        </Form.Control.Feedback>             
                    </Form.Group>
                    </Col>
                     <Col lg={6}>
                    <Form.Group className="mb-5">
                        <Form.Control required className='borderEffect' type="text" placeholder="Last Name"  onChange={(e) => {
                            setLName(e.target.value)
                            }} />
                            <span>{ formErrors.fName }</span>
                            
                        <Form.Control.Feedback type="invalid">
                            Please provide Last Name.
                        </Form.Control.Feedback>                            
                    </Form.Group>
                    </Col>
                    </Row>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Control className='borderEffect' type="email" placeholder="Enter Your Email" required onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                            <p>{ formErrors.fName }</p>
                    
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>                    
                    </Form.Group>
                     <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className='borderEffect' as="textarea" placeholder="Message" rows={3} required onChange={(e) => {
                            setMessage(e.target.value)
                    }} />
                            <p>{ formErrors.fName }</p>
                    
                        <Form.Control.Feedback type="invalid">
                            Please provide Your feedback.
                        </Form.Control.Feedback>                    
                    </Form.Group>
                    <Button variant="primary" type="submit" className=' w-100' onClick={submitDetails}>
                        Submit
                    </Button>
                    <Button as={Link} to='/repliesofcontactUs' variant="info" className=' w-100 mt-3'>
                        View
                    </Button>
                </Form>
            </div>
    </>
}

export default ContactForm