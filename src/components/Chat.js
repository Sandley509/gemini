import React from 'react';
import styled from 'styled-components';

const Chat = () => {
  return (
    <StyledContainer>
      <LeftSection>
        {/* Add scrollable list of people */}
        <h1>Chat</h1>
        <ScrollableList>
          {[...Array(5)].map((_, index) => (
            <Person key={index}>Person {index + 1}</Person>
          ))}
        </ScrollableList>
      </LeftSection>
      <RightSection>
        {/* Display the focused conversation */}
        <Conversation>
          {/* Example conversation */}
          {[...Array(10)].map((_, index) => (
            <Message key={index}>
              <Sender>Friend</Sender>
              <Content>Hello! How are you?</Content>
            </Message>
          )).reverse()}
          {/* Add more messages as needed */}
        </Conversation>
        {/* Typing field */}
        <TypingField>
          <InputField type="text" placeholder="Type a message..." />
          <SendButton>Send</SendButton>
        </TypingField>
      </RightSection>
    </StyledContainer>
  );
};

export default Chat;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh; /* Adjust as needed */
`;

const LeftSection = styled.div`
  flex: 1;
  color: black;
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* Set the width of the scrollbar */
  scrollbar-color: transparent transparent; /* Set the color of the scrollbar track and thumb */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Radius of the scrollbar thumb */
  }
`;

const ScrollableList = styled.div`
  padding: 20px;
`;

const Person = styled.div`
  border-top: 1px solid #f0f0f0;
  padding: 30px;
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
    color: black;
    border-radius: 10px;
  }
`;

const RightSection = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #f0f0f0;
  position: relative;
`;

const Conversation = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  height: calc(100vh - 40px); /* Adjust as needed to make room for typing field */
`;

const Message = styled.div`
  margin-bottom: 10px;
`;

const Sender = styled.div`
  font-weight: bold;
`;

const Content = styled.div``;

const TypingField = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 96%;
  margin-bottom: auto;
  background-color: white;
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  height:40px;
  border: 1px solid #ccc;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
