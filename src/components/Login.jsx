import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import '../css/Login.css'

function Login () {

    const [toggle, setToggle] = useState("signup")
    return (
        <div id="login">
            <div id="form">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingEmail" label="Email">
                            <Form.Control type="email" placeholder="kader@email.com" />
                        </FloatingLabel>
                        <Form.Text className="text-muted">
                            <em>we dont share emails. we promise.</em>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="keep me logged in" />
                    </Form.Group>
                    <Button variant="warning" type="submit">enter</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
