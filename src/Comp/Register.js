
import { useEffect } from "react"
import { Card, Form, Button, Col } from "react-bootstrap"
import { FaPaperPlane, FaTrash } from "react-icons/fa"




const RegisterHere = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
        

    return (<>
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">

                    <Card
                        style={{background:'#FED100'}}
                        key={'dark'}
                        className="mb-2 shadow-lg border-0 rounded-lg mt-5"
                    >
                        <Card.Header className=" " style={{background:'#FED100'}} >
                            <h3 className="text-center  my-4">
                                Register
                            </h3>
                        </Card.Header>
                        <Card.Body>

                            <Form >
                            <Form.Group controlId="formGridEmail" className="row mb-3">
                                    <Form.Label className="col-sm-3">Name</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            size="sm" 
                                            
                                            name="name"
                                             
                                            placeholder="Full name" 
                                        />
                                       </Col>
                                </Form.Group>

                                <Form.Group controlId="formGridEmail" className="row mb-3 ">
                                    <Form.Label className="col-sm-3">Email</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            size="sm" 
                                            type="email"
                                            name="email"
                                             
                                            placeholder=" Email" 
                                        />
                                       </Col>
                                </Form.Group>

                                <Form.Group className="mb-3 row" controlId="formGridAddress2" >
                                    <Form.Label className="col-sm-3">Phone no.</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            size="sm" 
                                            type="tel" 
                                            name="phone"
                                           
                                            placeholder="Phone Number" 
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3 row " controlId="formGridAddress2" >
                                    <Form.Label className="col-sm-3">Address.</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            as="textarea"
                                            size="sm"
                                            rows={5}
                                            name="address"
                                           
                                        />
                                    </Col>
                                </Form.Group>


                                <Form.Group className="row mb-3">
                                    <Col sm={{offset: 3, span: 9}}>
                                        <Button size="sm" variant="danger" type="reset" className="me-3">
                                            <FaTrash /> &nbsp;&nbsp;Cancel
                                        </Button>
                                        <Button  size="sm" variant="dark" type="submit">
                                            <FaPaperPlane />&nbsp;&nbsp;Submit
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>

                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    </>)
}

export default RegisterHere;