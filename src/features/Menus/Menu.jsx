import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import FlexContainer from '../../ui/FlexContainer';

const Card = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const CardBody = styled.div`
  padding: 16px;
`;
const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 12px;
`;
const Price = styled.span`
  font-weight: bold;
  color: #28a745;
`;
function Menu({ menu }) {
  const { name, description, price, image } = menu;
  return (
    <Card>
      <Image src={image} />
      <CardBody>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <FlexContainer format="between">
          <Price>
            {price}
            <span>kc</span>
          </Price>
          <Button size="small">Add to Order list</Button>
        </FlexContainer>
      </CardBody>
    </Card>
  );
}

export default Menu;
