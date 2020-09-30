import React from 'react';
import styled from 'styled-components';

import { tokens } from '../../layouts';

export function Home() {
  return (
    <HomePageWrapper>
      <span>
        I'm Jan from Hamburg, Germany, currently working as a Frontend Engineer
        at XING, the biggest job related social network in the DACH region
      </span>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
