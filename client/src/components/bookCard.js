import { Card } from 'react-bootstrap';

function BookCard () {
    return (
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>To Kill A Mockongbird</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Harper Lee</Card.Subtitle>
    <Card.Text>
      Gregory, Boo, and Scout play in a treehouse.
    </Card.Text>
  </Card.Body>
</Card>
)}

export default BookCard;