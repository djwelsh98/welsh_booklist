import { Form, Button } from 'react-bootstrap';

function BookForm() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBook">
          <Form.Label>Title</Form.Label>
          <Form.Control type="title" placeholder="To Kill A Mockingbird" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBook">
          <Form.Label>Author</Form.Label>
          <Form.Control type="author" placeholder="Harper Lee" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBook">
          <Form.Label>Synopsis</Form.Label>
          <Form.Control type="synopsis" placeholder="Gregory, Boo, and Scout play in a treehouse" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default BookForm;