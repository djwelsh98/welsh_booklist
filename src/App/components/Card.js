import { Card } from 'react-bootstrap';

function FirstCard () {
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>To Kill A Mockingbird</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Harper Lee</Card.Subtitle>
    <Card.Text>
      Boo, Scout, and Gregory play in a treehouse
    </Card.Text>
  </Card.Body>
</Card>
    )
}

export default FirstCard