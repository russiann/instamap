import React from 'react'
import styled from 'styled-components';

const SigninButtonWrapper = styled.button`
  padding: 10px;
  background: #fff;
  color: #cf255d;
  text-align: center;
  border: none;
  border-radius: 5px;
  min-width: 300px;
  cursor: pointer;
`;

const SigninButton = ({title, ...props}) => (
  <SigninButtonWrapper {...props} >
    {title}
  </SigninButtonWrapper>
);

export default SigninButton;