import { Form, Button } from 'react-bootstrap';




const SubmitForm =( {handleChange}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        handleChange(
            e.target.title.value, e.target.author.value, e.target.synopsis.value
        )
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="To Kill A Mockingbird" name= "title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="author" placeholder="Harper Lee" name = "author" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSynopsis">
                <Form.Label>Password</Form.Label>
                <Form.Control type="synopsis" placeholder="Boo, Scout, and Gregory play in a treehouse" name="synopsis" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SubmitForm