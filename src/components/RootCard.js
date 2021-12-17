import React, {useState} from "react";


function TuberGoober (props) {

  return (

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Mushroom common name</Card.Title>
        <Card.Subtitle>Mushroom botany name</Card.Subtitle>
        <Card.Text>This is where a brief description of the fungi will be populated</Card.Text>
        <Card.Text>This is where a discription of the dangerous effects of this plant</Card.Text>
        <Card.Link href="#">Card Link to cooking page</Card.Link>
      </Card.Body>

    </Card>
    
  );

}

export default TuberGoober;