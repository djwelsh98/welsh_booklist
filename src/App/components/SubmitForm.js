import { Form, Button } from 'react-bootstrap';

function SubmitForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="To Kill A Mockingbird" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="author" placeholder="Harper Lee" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSynopsis">
                <Form.Label>Password</Form.Label>
                <Form.Control type="synopsis" placeholder="Boo, Scout, and Gregory play in a treehouse" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SubmitForm