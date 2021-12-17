import React, {useState} from 'react';
// import Card from 'react-bootstrap/Card'
// import 'bootstrap/dist/css/bootstrap.min.css';

function FlowerCards(props) {

  return (
      <Card style={{ width: '18rem'}}>
        <Card.body>
          <Card.Title>Flower Common name{props.commonTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Flower botany name</Card.Subtitle>
          <Card.Text>
            Here is where all the information about the plant will be displayed.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.body>
      </Card>
    );
}

export default FlowerCards

