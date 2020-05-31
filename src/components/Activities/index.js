import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Menu,
  Select,
  SubTitle,
  SubTitle2,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../assets/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <Menu>
          <Select>
            <SubTitle>Todas</SubTitle>
          </Select>
          <Select>
            <SubTitle2>Minhas</SubTitle2>
          </Select>
        </Menu>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@ialexanderbrito</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Alexander</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 989,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 3 dias</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="#fff"
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="#fff" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
