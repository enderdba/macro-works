import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap';

function EmailForm(props) {
  console.log(props)
  const [body, setBody] = useState("");
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: ""
  })
  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log(props)
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() !== false) {
      const prop = props.finalReport()
      console.log(prop)
      setBody(encodeURI(`mailto:${values.email}?subject=Your Macros&body=${prop.carb} ${prop.fat} ${prop.protein}`))
      setTimeout(()=> {
        document.querySelector("#mailto").click()
      },500)
    }
  }
  return (
    <Form validated={valid} onSubmit={e => handleSubmit(e)}>
      <Form.Group controlId="formBasicName">
        <Form.Control type="text" name={"name"} value={values.name} onChange={handleChange} placeholder="Full Name" required />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" name={"email"} value={values.email} onChange={handleChange} placeholder="Email Address" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button type="submit" type="submit">
        Submit
      </Button>
      <a id="mailto" className="hidden" href={body}>Test mailto</a>
    </Form>
  )
}

export default EmailForm
