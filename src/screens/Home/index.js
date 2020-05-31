import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={25}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 1.000,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={25} color="#10c86e" />
        </Header>
      </Container>
    </Wrapper>
  );
}
