import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useCustomerContext } from '../context/CustomerContext';

const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;
const Popup = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 50%;
  margin: auto;
`;

const Title = styled.h3`
  margin-top: 0;
`;

function Tables() {
  const { table, setTable } = useCustomerContext();
  const navigate = useNavigate();
  function handleClick() {
    setTable(table);
    navigate('/menus');
  }
  return (
    <Overlay>
      <Popup>
        <Title>Type in your table number next to qr code.</Title>
        <Input
          type="text"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
        <Button variation="success" onClick={handleClick}>
          Lets Order
        </Button>
      </Popup>
    </Overlay>
  );
}

export default Tables;
