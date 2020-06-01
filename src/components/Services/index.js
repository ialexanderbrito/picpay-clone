import React from 'react';

import img1 from '../../assets/14.png';
import img2 from '../../assets/06.png';
import img3 from '../../assets/07.png';
import img4 from '../../assets/01.png';

import {
  Container,
  Title,
  Service,
  ServiceContent,
  ServiceImg,
  ServiceTitle,
  ServiceDescription,
} from './styles';

const services = [
  {
    img: img1,
    title: 'Pagar nas Maquininhas',
    description:
      'Pague com o PicPay em máquinas Cielo e Getnet escaneando o QR Code na máquina',
  },
  {
    img: img2,
    title: 'Pagar Conta',
    description: 'Pague sua conta de luz, água, boletos bancários etc.',
  },
  {
    img: img3,
    title: 'Cobrar',
    description: 'Cobre um amigo',
  },
  {
    img: img4,
    title: 'Recarga de Celular',
    description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios',
  },
];

const Services = () => {
  return (
    <Container>
      <Title>Serviços</Title>

      {services.map((item) => (
        <Service key={item.title}>
          <ServiceImg source={item.img} />

          <ServiceContent>
            <ServiceTitle>{item.title}</ServiceTitle>
            <ServiceDescription>{item.description}</ServiceDescription>
          </ServiceContent>
        </Service>
      ))}
    </Container>
  );
};

export default Services;
