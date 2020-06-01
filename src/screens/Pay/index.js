import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';
import Services from '../../components/Services';

import { Wrapper, Container, Header, Input, TextInput, Text } from './styles';

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={25}
            color="#00fc6c"
          />

          <Input>
            <AntDesign name="search1" size={20} color="#fff" />
            <TextInput
              placeholder="Quem você quer pagar?"
              keyboardAppearance="dark"
            />
          </Input>
        </Header>

        <Text>Sugestões para Você</Text>
        <Suggestions />

        <Services />
      </Container>
    </Wrapper>
  );
}
