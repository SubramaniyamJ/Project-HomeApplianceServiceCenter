// Import necessary libraries
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Create styled components
const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

// React component
const SubmissionPage = () => {
  return (
    <StyledPage>
      <StyledText>
        Your data is submitted. Soon it will be validated, and the service will
        be provided at our doorstep.
      </StyledText>
      <Link to = '/'>
      <StyledButton>Go Back to home</StyledButton>

      </Link>
    </StyledPage>
  );
};

export default SubmissionPage;
