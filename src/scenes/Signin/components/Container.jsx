import React from 'react'
import styled from 'styled-components';

const Background = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  height:100vh;
  background: #f09433; 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
`;

const Wrapper = styled.div`
  width: 300px;
  height: 100px;
`;

const Container = ({ children }) => (
  <Background>
    <Wrapper>
      {children}
    </Wrapper>
  </Background>
);

export default Container;