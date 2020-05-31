import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

import img13 from '../../assets/13.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas percerias em dia,use o PicPay para fazer suas cobranças.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
