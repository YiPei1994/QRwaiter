import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Badge from '../../ui/Bagde';
import Row from '../../ui/Row';
import { useCustomerContext } from '../../context/CustomerContext';

const Card = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  height: auto;
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
  const { id: menuId, name, description, price, image, category } = menu;
  const { handleAddMenu, addedMenus } = useCustomerContext();
  const currentQuantity =
    (addedMenus &&
      addedMenus
        .filter((menu) => menu.id === menuId)
        .map((menu) => menu.quantity)[0]) ||
    0;

  return (
    <Card>
      <Image src={image} />
      <CardBody>
        <Row type="horizontal">
          <Title>{name}</Title> <Badge variation="orange">{category}</Badge>
        </Row>

        <Description>{description}</Description>
        <Row type="horizontal">
          <Price>
            {price}
            <span>kc</span>
          </Price>

          <Button size="small" onClick={() => handleAddMenu(menu)}>
            Add to Order list
          </Button>
        </Row>
      </CardBody>
    </Card>
  );
}

export default Menu;
