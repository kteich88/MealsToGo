import React from "react";
import { Card, Image, Title } from "./Card.styles";

interface CompactCard {
  name: string;
  photo: string;
}

const CompactCard: React.FC<CompactCard> = ({ name, photo }) => {
  return (
    <Card>
      <Image key={name} source={{ uri: photo }} />
      <Title>{name}</Title>
    </Card>
  );
};

export default CompactCard;
