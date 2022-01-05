import { Card } from 'react-bootstrap';
import { useState } from 'react';



function FirstCard({book}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        <Card.Text>
          {book.synopsis}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FirstCard