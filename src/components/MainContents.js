import React, { useState } from 'react';
import { Button, Dialog, InputGroup, Classes, Intent } from '@blueprintjs/core';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
  max-width: 400px;
  padding: 20px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const MainContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <Content>
        <Button onClick={handleOpenDialog}>Open Dialog</Button>
        <Dialog
          isOpen={isOpen}
          onClose={handleCloseDialog}
          title="Sample Dialog"
        >
          <div className={Classes.DIALOG_BODY}>
            <InputGroup
              placeholder="Enter a value..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button intent={Intent.PRIMARY} onClick={handleCloseDialog}>
                Save
              </Button>
            </div>
          </div>
        </Dialog>
      </Content>
    </Container>
  );
};

export default MainContents;