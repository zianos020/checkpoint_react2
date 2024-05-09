import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, J_number, age, Img_URL }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={Img_URL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {J_number}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  J_number: "Unknown",
  age: "Unknown",
  Img_URL: "https://via.placeholder.com/150"
};

export default Player;
